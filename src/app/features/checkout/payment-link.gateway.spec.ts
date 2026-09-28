import { TestBed } from '@angular/core/testing';
import { ProductsPageContent } from '@core/models/product.model';
import { PRODUCTS_CONTENT } from '@core/tokens/content.tokens';
import { PaymentLinkCheckoutGateway } from './payment-link.gateway';

describe('PaymentLinkCheckoutGateway', () => {
  const content = {
    products: [{ id: 'com-link', paymentUrl: 'https://pagar.me/link-teste' }, { id: 'sem-link' }],
  } as unknown as ProductsPageContent;

  let gateway: PaymentLinkCheckoutGateway;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PaymentLinkCheckoutGateway, { provide: PRODUCTS_CONTENT, useValue: content }],
    });
    gateway = TestBed.inject(PaymentLinkCheckoutGateway);
  });

  it('redireciona para o link de pagamento do produto', async () => {
    expect(await gateway.startCheckout({ productId: 'com-link' })).toEqual({
      status: 'redirect',
      url: 'https://pagar.me/link-teste',
    });
  });

  it('informa indisponível quando o produto não tem link', async () => {
    expect(await gateway.startCheckout({ productId: 'sem-link' })).toEqual({
      status: 'unavailable',
    });
  });
});
