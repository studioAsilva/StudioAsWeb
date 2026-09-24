import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SITE_CONTENT } from '@core/tokens/content.tokens';
import { Logo } from '@shared/ui/logo/logo';

@Component({
  selector: 'app-footer',
  imports: [Logo],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Footer {
  protected readonly content = inject(SITE_CONTENT);
  protected readonly year = new Date().getFullYear();
}
