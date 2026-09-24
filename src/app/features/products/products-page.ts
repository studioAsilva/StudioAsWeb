import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { isPriced, PricedProduct, Product } from '@core/models/product.model';
import { SeoService } from '@core/services/seo.service';
import { PRODUCTS_CONTENT, SITE_CONTENT } from '@core/tokens/content.tokens';
import { buildWhatsAppUrl } from '@core/utils/whatsapp';
import { CheckoutDialog } from '@features/checkout/checkout-dialog/checkout-dialog';
import { SectionHeading } from '@shared/ui/section-heading/section-heading';
import { ProductCard } from './components/product-card/product-card';

@Component({
  selector: 'app-products-page',
  imports: [SectionHeading, ProductCard, CheckoutDialog],
  templateUrl: './products-page.html',
  styleUrl: './products-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ProductsPage {
  private readonly document = inject(DOCUMENT);
  private readonly whatsappNumber = inject(SITE_CONTENT).contact.whatsappNumber;

  protected readonly content = inject(PRODUCTS_CONTENT);
  protected readonly products = this.content.products.filter((p) => p.published);
  protected readonly selectedProduct = signal<PricedProduct | null>(null);

  constructor() {
    inject(SeoService).apply(this.content.seo);
  }

  /** Produtos com preço vão para o checkout; os demais, para o WhatsApp. */
  protected onBuy(product: Product): void {
    if (isPriced(product)) {
      this.selectedProduct.set(product);
      return;
    }
    const url = buildWhatsAppUrl(
      this.whatsappNumber,
      `Olá! Quero saber mais sobre: ${product.name}.`,
    );
    this.document.defaultView?.open(url, '_blank', 'noopener');
  }
}
