import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-section-heading',
  templateUrl: './section-heading.html',
  styleUrl: './section-heading.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.is-centered]': "align() === 'center'",
    '[class.is-inverse]': 'inverse()',
  },
})
export class SectionHeading {
  readonly eyebrow = input<string>();
  readonly title = input.required<string>();
  readonly subtitle = input<string>();
  readonly align = input<'left' | 'center'>('left');
  /** Exibe um traço decorativo abaixo do título. */
  readonly divider = input(false);
  /** Para uso sobre fundo escuro. */
  readonly inverse = input(false);
  /** Nível do título: 1 para o título da página, 2 para seções. */
  readonly level = input<1 | 2>(2);
  /** Id aplicado ao título, útil para `aria-labelledby` da seção. */
  readonly headingId = input<string>();
}
