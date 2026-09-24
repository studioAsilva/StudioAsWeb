export interface ImageAsset {
  src: string;
  alt: string;
  width: number;
  height: number;
}

/** Link interno (rota do Angular) ou externo (URL completa). */
export type CallToAction = { label: string } & (
  { route: string; fragment?: string } | { href: string; external?: boolean }
);

export interface SeoContent {
  title: string;
  description: string;
}
