import { CurrencyPipe, NgOptimizedImage } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  output,
  signal,
  viewChild,
} from '@angular/core';
import { Product } from '@core/models/product.model';
import { Icon } from '@shared/ui/icon/icon';
import { Modal } from '@shared/ui/modal/modal';

@Component({
  selector: 'app-product-details',
  imports: [Modal, Icon, NgOptimizedImage, CurrencyPipe],
  templateUrl: './product-details.html',
  styleUrl: './product-details.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetails {
  private readonly modal = viewChild.required(Modal);

  readonly product = input.required<Product>();
  readonly buy = output<Product>();
  readonly closed = output<void>();

  protected readonly images = computed(() => {
    const p = this.product();
    return [p.image, ...(p.extraImages ?? [])];
  });
  protected readonly selectedIndex = signal(0);
  protected readonly selectedImage = computed(() => this.images()[this.selectedIndex()]);

  protected close(): void {
    this.modal().close();
  }
}
