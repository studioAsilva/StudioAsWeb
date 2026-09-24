// Uso: npm run images  (lê assets-src/images e grava em public/assets/images)
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
})();
