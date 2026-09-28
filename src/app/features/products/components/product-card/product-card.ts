import { CurrencyPipe, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { Product } from '@core/models/product.model';

@Component({
  selector: 'app-product-card',
  imports: [NgOptimizedImage, CurrencyPipe],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCard {
  readonly product = input.required<Product>();
  /** Marque nos cards visíveis ao carregar a página (melhora o LCP). */
  readonly priority = input(false);
  readonly details = output<Product>();
  readonly buy = output<Product>();
}
