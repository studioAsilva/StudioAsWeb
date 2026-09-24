import { CallToAction, ImageAsset } from './common.model';

export interface HeroContent {
  eyebrow: string;
  title: string;
  titleHighlight: string;
  subtitle: string;
  text: string;
  image: ImageAsset;
  cta: CallToAction;
}

export interface Highlight {
  value: string;
  label: string;
}

export interface AboutContent {
  eyebrow: string;
  title: string;
  paragraphs: string[];
  image: ImageAsset;
  highlights: Highlight[];
}

export interface LocationContent {
  eyebrow: string;
  title: string;
  addressTitle: string;
  hoursTitle: string;
  mapPlaceholder: { title: string; text: string };
}

export interface ProductsCtaContent {
  eyebrow: string;
  title: string;
  cta: CallToAction;
}

export interface HomeContent {
  hero: HeroContent;
  about: AboutContent;
  location: LocationContent;
  productsCta: ProductsCtaContent;
}
