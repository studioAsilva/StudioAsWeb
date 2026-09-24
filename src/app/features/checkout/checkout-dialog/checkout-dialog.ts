import { CurrencyPipe, DOCUMENT, NgOptimizedImage } from '@angular/common';
import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  computed,
  ElementRef,
  inject,
  input,
  output,
  signal,
  viewChild,
} from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { PaymentMethod } from '@core/models/checkout.model';
import { PricedProduct } from '@core/models/product.model';
import { SITE_CONTENT } from '@core/tokens/content.tokens';
import { buildWhatsAppUrl } from '@core/utils/whatsapp';
import { CheckoutGateway } from '../checkout.gateway';
import { brazilianPhoneValidator } from '../phone.validator';

type CheckoutState = 'idle' | 'submitting' | 'unavailable' | 'error';

interface PaymentOption {
  value: PaymentMethod;
  label: string;
}

@Component({
  selector: 'app-checkout-dialog',
  imports: [ReactiveFormsModule, NgOptimizedImage, CurrencyPipe],
  templateUrl: './checkout-dialog.html',
  styleUrl: './checkout-dialog.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckoutDialog {
  private readonly gateway = inject(CheckoutGateway);
  private readonly document = inject(DOCUMENT);
  private readonly contact = inject(SITE_CONTENT).contact;
  private readonly dialog = viewChild.required<ElementRef<HTMLDialogElement>>('dialog');

  readonly product = input.required<PricedProduct>();
  readonly closed = output<void>();

  protected readonly paymentOptions: PaymentOption[] = [
    { value: 'pix', label: 'Pix' },
    { value: 'credit_card', label: 'Crédito' },
    { value: 'debit_card', label: 'Débito' },
  ];

  protected readonly form = inject(FormBuilder).nonNullable.group({
    paymentMethod: ['pix' as PaymentMethod, Validators.required],
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, brazilianPhoneValidator]],
  });

  protected readonly state = signal<CheckoutState>('idle');

  protected readonly whatsappUrl = computed(() =>
    buildWhatsAppUrl(this.contact.whatsappNumber, `Olá! Quero comprar: ${this.product().name}.`),
  );

  constructor() {
    afterNextRender(() => this.dialog().nativeElement.showModal());
  }

  protected close(): void {
    this.dialog().nativeElement.close();
  }

  /** Fecha ao clicar no fundo escurecido (fora do conteúdo). */
  protected onBackdropClick(event: MouseEvent): void {
    if (event.target === this.dialog().nativeElement) this.close();
  }

  protected hasError(control: 'name' | 'email' | 'phone'): boolean {
    const c = this.form.controls[control];
    return c.invalid && (c.touched || c.dirty);
  }

  protected async submit(): Promise<void> {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const { paymentMethod, ...customer } = this.form.getRawValue();
    this.state.set('submitting');

    try {
      const result = await this.gateway.createOrder({
        productId: this.product().id,
        paymentMethod,
        customer,
      });

      if (result.status === 'redirect') {
        this.document.location.href = result.url;
        return;
      }
      this.state.set('unavailable');
    } catch {
      this.state.set('error');
    }
  }
}
