import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SeoService } from '@core/services/seo.service';
import { HOME_CONTENT, SITE_CONTENT } from '@core/tokens/content.tokens';
import { About } from './sections/about/about';
import { Hero } from './sections/hero/hero';
import { Location } from './sections/location/location';
import { ProductsCta } from './sections/products-cta/products-cta';

@Component({
  selector: 'app-home-page',
  imports: [Hero, About, Location, ProductsCta],
  template: `
    <app-hero [content]="content.hero" />
    <app-about [content]="content.about" />
    <app-location [content]="content.location" [contact]="site.contact" />
    <app-products-cta [content]="content.productsCta" />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HomePage {
  protected readonly site = inject(SITE_CONTENT);
  protected readonly content = inject(HOME_CONTENT);

  constructor() {
    inject(SeoService).apply(this.site.seo);
  }
}
