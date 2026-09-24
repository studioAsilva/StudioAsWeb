import { Injectable } from '@angular/core';
import { CheckoutResult } from '@core/models/checkout.model';
import { CheckoutGateway } from './checkout.gateway';

/**
 * Implementação provisória enquanto a integração com o Pagar.me não existe:
 * informa que o pagamento online está indisponível e a UI oferece o WhatsApp.
 */
@Injectable()
export class PendingCheckoutGateway extends CheckoutGateway {
  createOrder(): Promise<CheckoutResult> {
    return Promise.resolve({ status: 'unavailable' });
  }
}
