import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CallToAction } from '@core/models/common.model';

export type CtaVariant = 'primary' | 'outline-light';
export type CtaSize = 'md' | 'lg';

@Component({
  selector: 'app-cta-link',
  imports: [RouterLink],
  templateUrl: './cta-link.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CtaLink {
  readonly cta = input.required<CallToAction>();
  readonly variant = input<CtaVariant>('primary');
  readonly size = input<CtaSize>('lg');

  protected readonly classes = computed(() => `btn btn--${this.variant()} btn--${this.size()}`);
  protected readonly internal = computed(() => {
    const cta = this.cta();
    return 'route' in cta ? cta : null;
  });
  protected readonly external = computed(() => {
    const cta = this.cta();
    return 'href' in cta ? cta : null;
  });
}
