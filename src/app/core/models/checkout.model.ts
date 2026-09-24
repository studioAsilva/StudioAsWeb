export type PaymentMethod = 'pix' | 'credit_card' | 'debit_card';

export interface CheckoutCustomer {
  name: string;
  email: string;
  phone: string;
}

export interface CheckoutRequest {
  productId: string;
  paymentMethod: PaymentMethod;
  customer: CheckoutCustomer;
}

export type CheckoutResult =
  /** Gateway retornou uma página de pagamento (ex.: link de checkout Pagar.me). */
  | { status: 'redirect'; url: string }
  /** Pagamento online ainda não configurado. */
  | { status: 'unavailable' };
