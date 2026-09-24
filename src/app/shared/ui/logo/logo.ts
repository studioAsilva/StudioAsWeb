import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-logo',
  template: `
    <span class="logo__mark" aria-hidden="true">As</span>
    <span class="logo__name">Ana Silva</span>
    <span class="logo__sub">Studio</span>
  `,
  styleUrl: './logo.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { '[class.is-inverse]': 'inverse()' },
})
export class Logo {
  readonly inverse = input(false);
}
