import { SeoContent } from './common.model';

export interface NavLink {
  label: string;
  route: string;
  fragment?: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface ContactInfo {
  /** Somente dígitos com DDI, ex.: 5511999999999 */
  whatsappNumber: string;
  whatsappMessage: string;
  phoneDisplay: string;
  email: string;
  addressLines: string[];
  hours: string[];
  /** URL do "Incorporar mapa" do Google Maps. Vazio = exibe placeholder. */
  mapEmbedUrl: string;
}

export interface SiteContent {
  brand: { name: string; shortName: string };
  seo: SeoContent;
  nav: NavLink[];
  headerCta: { label: string; route: string };
  contact: ContactInfo;
  social: SocialLink[];
  footer: { socialTitle: string; copyright: string };
}
