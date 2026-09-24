import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SITE_CONTENT } from '@core/tokens/content.tokens';
import { buildWhatsAppUrl } from '@core/utils/whatsapp';

@Component({
  selector: 'app-whatsapp-button',
  template: `
    <a
      class="fab"
      [href]="url"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <svg viewBox="0 0 24 24" width="30" height="30" aria-hidden="true" fill="currentColor">
        <path
          d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.88-.79-1.48-1.76-1.66-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35M12.05 21.5h-.01a9.4 9.4 0 0 1-4.8-1.31l-.34-.2-3.56.93.95-3.47-.22-.36a9.4 9.4 0 0 1-1.44-5.02c0-5.2 4.23-9.43 9.44-9.43a9.37 9.37 0 0 1 9.42 9.44c0 5.2-4.23 9.43-9.44 9.43M20.08 3.9A11.26 11.26 0 0 0 12.05.58C5.8.58.7 5.67.7 11.93c0 2 .52 3.95 1.52 5.67L.6 23.5l6.02-1.58a11.33 11.33 0 0 0 5.42 1.38h.01c6.25 0 11.34-5.09 11.35-11.35 0-3.03-1.18-5.88-3.32-8.02"
        />
      </svg>
    </a>
  `,
  styles: `
    .fab {
      position: fixed;
      right: clamp(1rem, 3vw, 2rem);
      bottom: clamp(1rem, 3vw, 2rem);
      z-index: 60;
      display: grid;
      place-items: center;
      width: 4.25rem;
      height: 4.25rem;
      border-radius: 50%;
      background: var(--color-primary);
      color: var(--color-primary-contrast);
      box-shadow: var(--shadow-md);
      transition:
        transform var(--transition),
        background-color var(--transition);
    }

    @media (max-width: 36rem) {
      .fab {
        width: 3.5rem;
        height: 3.5rem;
      }
    }

    .fab:hover {
      transform: scale(1.06);
      background: var(--color-primary-hover);
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WhatsappButton {
  private readonly contact = inject(SITE_CONTENT).contact;
  protected readonly url = buildWhatsAppUrl(
    this.contact.whatsappNumber,
    this.contact.whatsappMessage,
  );
}
