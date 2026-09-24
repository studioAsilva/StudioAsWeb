import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-logo',
  imports: [NgOptimizedImage],
  template: `
    <img
      class="logo"
      ngSrc="assets/images/logo.svg"
      alt="Studio Ana Silva"
      width="546"
      height="287"
      [priority]="priority()"
    />
  `,
  styleUrl: './logo.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { '[class.is-inverse]': 'inverse()' },
})
export class Logo {
  /** Versão branca, para fundos escuros. */
  readonly inverse = input(false);
  /** Use no header (visível ao carregar a página). */
  readonly priority = input(false);
}
