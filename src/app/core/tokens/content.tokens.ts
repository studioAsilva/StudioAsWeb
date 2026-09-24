import { InjectionToken } from '@angular/core';
import { HOME_CONTENT_DATA } from '@content/home.content';
import { PRODUCTS_CONTENT_DATA } from '@content/products.content';
import { SITE_CONTENT_DATA } from '@content/site.content';
import { HomeContent } from '@core/models/home.model';
import { ProductsPageContent } from '@core/models/product.model';
import { SiteContent } from '@core/models/site.model';

/**
 * O conteúdo chega aos componentes por injeção. Hoje vem de arquivos estáticos
 * em `src/app/content`; para usar um CMS/API basta trocar o provider do token.
 */
export const SITE_CONTENT = new InjectionToken<SiteContent>('SITE_CONTENT', {
  providedIn: 'root',
  factory: () => SITE_CONTENT_DATA,
});

export const HOME_CONTENT = new InjectionToken<HomeContent>('HOME_CONTENT', {
  providedIn: 'root',
  factory: () => HOME_CONTENT_DATA,
});

export const PRODUCTS_CONTENT = new InjectionToken<ProductsPageContent>('PRODUCTS_CONTENT', {
  providedIn: 'root',
  factory: () => PRODUCTS_CONTENT_DATA,
});
