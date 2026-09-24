import { CheckoutRequest, CheckoutResult } from '@core/models/checkout.model';

/**
 * Contrato do provedor de pagamento. A UI depende só desta abstração;
 * a implementação concreta (ex.: Pagar.me) é registrada em `app.config.ts`.
 */
export abstract class CheckoutGateway {
  abstract createOrder(request: CheckoutRequest): Promise<CheckoutResult>;
}
