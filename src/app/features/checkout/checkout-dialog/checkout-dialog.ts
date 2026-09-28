import { CurrencyPipe, DOCUMENT, NgOptimizedImage } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  output,
  signal,
  viewChild,
} from '@angular/core';
import { PricedProduct } from '@core/models/product.model';
import { SITE_CONTENT } from '@core/tokens/content.tokens';
import { buildWhatsAppUrl } from '@core/utils/whatsapp';
import { Icon } from '@shared/ui/icon/icon';
import { Modal } from '@shared/ui/modal/modal';
import { CheckoutGateway } from '../checkout.gateway';

type CheckoutState = 'idle' | 'redirecting' | 'unavailable' | 'error';

/** Resumo da compra antes de seguir para a página de pagamento. */
@Component({
  selector: 'app-checkout-dialog',
  imports: [Modal, Icon, NgOptimizedImage, CurrencyPipe],
  templateUrl: './checkout-dialog.html',
  styleUrl: './checkout-dialog.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckoutDialog {
  private readonly gateway = inject(CheckoutGateway);
  private readonly document = inject(DOCUMENT);
  private readonly contact = inject(SITE_CONTENT).contact;
  private readonly modal = viewChild.required(Modal);

  readonly product = input.required<PricedProduct>();
  readonly closed = output<void>();

  protected readonly state = signal<CheckoutState>('idle');

  protected readonly whatsappUrl = computed(() =>
    buildWhatsAppUrl(this.contact.whatsappNumber, `Olá! Quero comprar: ${this.product().name}.`),
  );

  protected close(): void {
    this.modal().close();
  }

  protected async goToPayment(): Promise<void> {
    this.state.set('redirecting');
    try {
      const result = await this.gateway.startCheckout({ productId: this.product().id });
      if (result.status === 'redirect') {
        // Mesma aba: o Pagar.me traz a cliente de volta pela URL de retorno
        this.document.location.href = result.url;
        return;
      }
      this.state.set('unavailable');
    } catch {
      this.state.set('error');
    }
  }
}
