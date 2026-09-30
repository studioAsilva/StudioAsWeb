import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, input, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { isPriced, PricedProduct, Product } from '@core/models/product.model';
import { SeoService } from '@core/services/seo.service';
import { PRODUCTS_CONTENT, SITE_CONTENT } from '@core/tokens/content.tokens';
import { buildWhatsAppUrl } from '@core/utils/whatsapp';
import { CheckoutDialog } from '@features/checkout/checkout-dialog/checkout-dialog';
import { PaymentReturn } from '@features/checkout/payment-return/payment-return';
import { SectionHeading } from '@shared/ui/section-heading/section-heading';
import { ProductCard } from './components/product-card/product-card';
import { ProductDetails } from './components/product-details/product-details';

@Component({
  selector: 'app-products-page',
  imports: [SectionHeading, ProductCard, ProductDetails, CheckoutDialog, PaymentReturn],
  templateUrl: './products-page.html',
  styleUrl: './products-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ProductsPage {
  private readonly document = inject(DOCUMENT);
  private readonly whatsappNumber = inject(SITE_CONTENT).contact.whatsappNumber;
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  /** `?compra=<id>`: a cliente voltou da página de pagamento do Pagar.me. */
  readonly compra = input<string>();

  protected readonly content = inject(PRODUCTS_CONTENT);
  protected readonly groups = this.content.categories
    .map((category) => ({
      ...category,
      products: this.content.products.filter((p) => p.published && p.category === category.id),
    }))
    .filter((group) => group.products.length > 0);
  protected readonly detailsProduct = signal<Product | null>(null);
  protected readonly checkoutProduct = signal<PricedProduct | null>(null);
  protected readonly purchasedProduct = computed(() =>
    this.content.products.find((p) => p.id === this.compra()),
  );

  constructor() {
    inject(SeoService).apply(this.content.seo);
  }

  /** Fecha o popup de retorno e limpa o `?compra=` (não reabre ao recarregar). */
  protected closePaymentReturn(): void {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { compra: null },
      queryParamsHandling: 'merge',
      replaceUrl: true,
    });
  }

  /** Produtos com preço vão para o checkout; os demais, para o WhatsApp. */
  protected onBuy(product: Product): void {
    this.detailsProduct.set(null);
    if (isPriced(product)) {
      this.checkoutProduct.set(product);
      return;
    }
    const message = product.whatsappMessage ?? `Olá! Quero saber mais sobre: ${product.name}.`;
    const url = buildWhatsAppUrl(this.whatsappNumber, message);
    this.document.defaultView?.open(url, '_blank', 'noopener');
  }
}
