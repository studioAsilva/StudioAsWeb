import { CheckoutRequest, CheckoutResult } from '@core/models/checkout.model';

/**
 * Contrato do provedor de pagamento. A UI depende só desta abstração;
 * a implementação concreta é registrada em `app.config.ts`.
 */
export abstract class CheckoutGateway {
  abstract startCheckout(request: CheckoutRequest): Promise<CheckoutResult>;
}
