import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { AboutContent } from '@core/models/home.model';
import { SectionHeading } from '@shared/ui/section-heading/section-heading';

@Component({
  selector: 'app-about',
  imports: [NgOptimizedImage, SectionHeading],
  templateUrl: './about.html',
  styleUrl: './about.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class About {
  readonly content = input.required<AboutContent>();
}
