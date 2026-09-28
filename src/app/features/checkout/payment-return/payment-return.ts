import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, input, output, viewChild } from '@angular/core';
import { Product } from '@core/models/product.model';
import { Icon } from '@shared/ui/icon/icon';
import { Modal } from '@shared/ui/modal/modal';

/**
 * Exibido quando a cliente volta do Pagar.me. Não confirma o pagamento
 * (quem confirma é o webhook, por e-mail) — por isso não mostra nada sigiloso.
 */
@Component({
  selector: 'app-payment-return',
  imports: [Modal, Icon, NgOptimizedImage],
  templateUrl: './payment-return.html',
  styleUrl: './payment-return.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaymentReturn {
  private readonly modal = viewChild.required(Modal);

  /** Produto comprado, se identificado pela URL de retorno. */
  readonly product = input<Product>();
  readonly closed = output<void>();

  protected close(): void {
    this.modal().close();
  }
}
