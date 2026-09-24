import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { LocationContent } from '@core/models/home.model';
import { ContactInfo } from '@core/models/site.model';
import { SectionHeading } from '@shared/ui/section-heading/section-heading';

@Component({
  selector: 'app-location',
  imports: [SectionHeading],
  templateUrl: './location.html',
  styleUrl: './location.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Location {
  private readonly sanitizer = inject(DomSanitizer);

  readonly content = input.required<LocationContent>();
  readonly contact = input.required<ContactInfo>();

  /** A URL vem do arquivo de conteúdo do próprio site (fonte confiável). */
  protected readonly mapUrl = computed(() => {
    const url = this.contact().mapEmbedUrl;
    return url ? this.sanitizer.bypassSecurityTrustResourceUrl(url) : null;
  });
}
