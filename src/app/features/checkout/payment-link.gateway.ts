import { inject, Injectable } from '@angular/core';
import { CheckoutRequest, CheckoutResult } from '@core/models/checkout.model';
import { PRODUCTS_CONTENT } from '@core/tokens/content.tokens';
import { CheckoutGateway } from './checkout.gateway';

/**
 * Checkout por link de pagamento do Pagar.me: cada produto tem o seu link
 * (criado no painel do Pagar.me, com preço fixo). A cliente informa os dados
 * e paga na página do Pagar.me; a confirmação chega por e-mail via webhook.
 */
@Injectable()
export class PaymentLinkCheckoutGateway extends CheckoutGateway {
  private readonly products = inject(PRODUCTS_CONTENT).products;

  startCheckout({ productId }: CheckoutRequest): Promise<CheckoutResult> {
    const url = this.products.find((p) => p.id === productId)?.paymentUrl;
    return Promise.resolve(url ? { status: 'redirect', url } : { status: 'unavailable' });
  }
}
