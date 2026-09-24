/**
 * Arquivos de imagem (em `public/assets/images`) com suas dimensões reais.
 * As versões web são geradas a partir dos originais em `assets-src/images`.
 */
const image = (file: string, width: number, height: number) => ({
  src: `assets/images/${file}`,
  width,
  height,
});

export const IMAGES = {
  hero: image('hero.webp', 1200, 1800),
  about: image('about.webp', 1200, 1500),
  productTabela: image('product-tabela.webp', 900, 640),
  productTabelaThumb: image('product-tabela-thumb.webp', 240, 240),
  // Prontas para quando os produtos forem adicionados:
  productMentoria: image('product-mentoria.webp', 900, 640),
  productPerfume: image('product-perfume.webp', 900, 640),
} as const;
