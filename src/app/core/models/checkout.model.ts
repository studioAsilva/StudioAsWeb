export interface CheckoutRequest {
  productId: string;
}

export type CheckoutResult =
  /** Página de pagamento para onde a cliente deve ir (ex.: link do Pagar.me). */
  | { status: 'redirect'; url: string }
  /** Pagamento online ainda não configurado para o produto. */
  | { status: 'unavailable' };
