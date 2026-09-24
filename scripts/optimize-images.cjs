// Uso: npm run images  (lê assets-src/images e grava em public/assets/images e public/)
// Gera versões web (WebP) já no recorte em que cada foto é exibida.
const sharp = require('sharp');
const path = require('path');
const root = path.resolve(__dirname, '..');
const src = (n) => path.join(root, 'assets-src/images', `IMG_${n}.JPG.jpeg`);
const out = (n) => path.join(root, 'public/assets/images', n);
const jobs = [
  ['principal', 'hero.webp', 1200, 1800],
  ['secundaria', 'about.webp', 1200, 1500],
  ['tabelaValores', 'product-tabela.webp', 900, 640],
  ['tabela', 'product-tabela-thumb.webp', 240, 240],
  ['mentoria', 'product-mentoria.webp', 900, 640],
  ['perfume', 'product-perfume.webp', 900, 640],
  ['8347', 'product-guia.webp', 900, 640],
];
(async () => {
  for (const [name, file, width, height] of jobs) {
    const info = await sharp(src(name))
      .rotate()
      .resize({ width, height, fit: 'cover', position: 'north' })
      .webp({ quality: 78 })
      .toFile(out(file));
    console.log(file, `${info.width}x${info.height}`, Math.round(info.size / 1024) + 'KB');
  }
  await buildBrand();
})();

// ---------- Marca: logo recortada + favicons (a partir de assets-src/images/LOGOMARCA-PDF.svg)
const fs = require('fs');
const LOGO_SRC = path.join(root, 'assets-src/images/LOGOMARCA-PDF.svg');
// Área útil do desenho (o arquivo original é quadrado, com muita margem)
const LOGO_VIEWBOX = '104.75 235 545.75 286.5';
const [, , LOGO_WIDTH, LOGO_HEIGHT] = LOGO_VIEWBOX.split(' ');
// Recorte do monograma "As" em px, renderizado a 576 dpi (8 px por unidade do SVG)
const MONOGRAM = { left: 1280, top: 1860, width: 1760, height: 1380 };
const FAVICON_BG = '#5c2f31';

async function buildBrand() {
  // Ajusta só a tag <svg> raiz: novo viewBox e tamanho intrínseco igual a ele
  const svg = fs.readFileSync(LOGO_SRC, 'utf8').replace(/<svg[^>]*>/, (tag) =>
    tag
      .replace(/viewBox="[^"]*"/, `viewBox="${LOGO_VIEWBOX}"`)
      .replace(/\swidth="[^"]*"/, ` width="${LOGO_WIDTH}"`)
      .replace(/\sheight="[^"]*"/, ` height="${LOGO_HEIGHT}"`),
  );
  fs.writeFileSync(out('logo.svg'), svg);
  console.log('logo.svg');

  // Monograma em branco (mantém só o canal alfa do desenho)
  const render = await sharp(LOGO_SRC, { density: 576 }).ensureAlpha().png().toBuffer();
  const alpha = await sharp(render).extract(MONOGRAM).extractChannel(3).toBuffer();
  const white = await sharp({
    create: { width: MONOGRAM.width, height: MONOGRAM.height, channels: 3, background: '#fff' },
  })
    .joinChannel(alpha)
    .png()
    .toBuffer();

  const icon = async (size, { round }) => {
    const inner = Math.round(size * (round ? 0.76 : 0.7));
    const mono = await sharp(white)
      .resize(inner, inner, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toBuffer();
    const shape = round
      ? `<circle cx="${size / 2}" cy="${size / 2}" r="${size / 2}" fill="${FAVICON_BG}"/>`
      : `<rect width="${size}" height="${size}" fill="${FAVICON_BG}"/>`;
    const bg = Buffer.from(
      `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}">${shape}</svg>`,
    );
    return sharp(bg).composite([{ input: mono, gravity: 'center' }]).png();
  };

  const publicDir = path.join(root, 'public');
  await (await icon(32, { round: true })).toFile(path.join(publicDir, 'favicon-32.png'));
  await (await icon(192, { round: true })).toFile(path.join(publicDir, 'icon-192.png'));
  // iOS aplica os cantos arredondados sozinho
  await (await icon(180, { round: false })).toFile(path.join(publicDir, 'apple-touch-icon.png'));
  console.log('favicon-32.png, icon-192.png, apple-touch-icon.png');
}
