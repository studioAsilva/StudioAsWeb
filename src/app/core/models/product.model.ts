import { IconName } from '@shared/ui/icon/icon';
import { ImageAsset, SeoContent } from './common.model';

/** Item da caixa "Entrega e informações" nos detalhes do produto. */
export interface ProductInfo {
  icon: IconName;
  title: string;
  text: string;
}

/** Seção extra dos detalhes (ex.: pirâmide olfativa do perfume). */
export interface ProductSection {
  title: string;
  lead?: string;
  items: string[];
}

/** Grupo da página de produtos, exibido com um banner (ex.: "Editáveis"). */
export interface ProductCategory {
  id: string;
  title: string;
}

export interface Product {
  id: string;
  /** false = cadastrado, mas ainda não aparece no site. */
  published: boolean;
  /** `id` de uma das `categories` da página. */
  category: string;
  name: string;
  /** Frase curta: aparece no card e em destaque nos detalhes. */
  tagline: string;
  description: string;
  features: string[];
  /** Parágrafos de fechamento exibidos nos detalhes. */
  closing?: string[];
  /** Frase de destaque final. */
  highlight?: string;
  sections?: ProductSection[];
  info: ProductInfo[];
  /** Título da caixa de informações (padrão: "Entrega e informações"). */
  infoTitle?: string;
  /** Mensagem do WhatsApp para produtos sem preço (há uma mensagem padrão). */
  whatsappMessage?: string;
  /** Aviso exibido no checkout (ex.: como funciona a entrega). Aceita `<strong>` para destaque. */
  checkoutNotice?: string;
  /** Valor em centavos (padrão dos gateways). Sem valor = contato pelo WhatsApp. */
  priceInCents?: number;
  /** Preço "de" riscado ao lado do valor (ex.: soma dos itens de um combo), em centavos. */
  compareAtPriceInCents?: number;
  /** Selo de destaque sobre a foto do card (ex.: "Combo"). */
  badge?: string;
  /**
   * Link de pagamento (criado pela API da Pagar.me/Stone). Crie com `flow_settings.success_url`
   * = `<site>/produtos?compra=<id>` para exibir o popup de confirmação na volta.
   */
  paymentUrl?: string;
  image: ImageAsset;
  /** Fotos adicionais da galeria nos detalhes. */
  extraImages?: ImageAsset[];
  /** Miniatura exibida no checkout (usa `image` se ausente). */
  thumbnail?: ImageAsset;
  /** Texto do botão de compra nos detalhes. */
  buyLabel: string;
  /** Texto curto do botão de compra no card (padrão: "Comprar"). */
  cardActionLabel?: string;
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
  /** Ordem dos banners na página; categorias sem produto publicado não aparecem. */
  categories: ProductCategory[];
  products: Product[];
}
