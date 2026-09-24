import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ProductsCtaContent } from '@core/models/home.model';
import { CtaLink } from '@shared/ui/cta-link/cta-link';
import { SectionHeading } from '@shared/ui/section-heading/section-heading';

@Component({
  selector: 'app-products-cta',
  imports: [SectionHeading, CtaLink],
  template: `
    @let c = content();
    <section class="products-cta" aria-labelledby="products-cta-title">
      <div class="container">
        <app-section-heading
          [eyebrow]="c.eyebrow"
          [title]="c.title"
          align="center"
          [inverse]="true"
          headingId="products-cta-title"
        />
        <app-cta-link [cta]="c.cta" variant="outline-light" />
      </div>
    </section>
  `,
  styles: `
    .products-cta {
      padding-block: clamp(4rem, 8vw, 6rem) var(--space-8);
      background: var(--color-dark);
      text-align: center;
    }

    app-section-heading {
      margin-bottom: var(--space-8);
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsCta {
  readonly content = input.required<ProductsCtaContent>();
}
