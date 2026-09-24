import { ImageAsset, SeoContent } from './common.model';

export interface Product {
  id: string;
  /** false = cadastrado, mas ainda não aparece no site. */
  published: boolean;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  /** Parágrafos de fechamento exibidos após a lista de benefícios. */
  closing?: string[];
  /** Frase de destaque final. */
  highlight?: string;
  /** Valor em centavos (padrão dos gateways). Sem valor = contato pelo WhatsApp. */
  priceInCents?: number;
  image: ImageAsset;
  /** Miniatura exibida no checkout (usa `image` se ausente). */
  thumbnail?: ImageAsset;
  buyLabel: string;
}

/** Produto com preço definido, apto a ir para o checkout. */
export type PricedProduct = Product & { priceInCents: number };

export function isPriced(product: Product): product is PricedProduct {
  return product.priceInCents !== undefined;
}

export interface ProductsPageContent {
  seo: SeoContent;
  eyebrow: string;
  title: string;
  subtitle: string;
  products: Product[];
}
