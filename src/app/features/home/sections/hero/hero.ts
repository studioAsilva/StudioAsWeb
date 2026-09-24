import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { HeroContent } from '@core/models/home.model';
import { CtaLink } from '@shared/ui/cta-link/cta-link';

@Component({
  selector: 'app-hero',
  imports: [NgOptimizedImage, CtaLink],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Hero {
  readonly content = input.required<HeroContent>();
}
