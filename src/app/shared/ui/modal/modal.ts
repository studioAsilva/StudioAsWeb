import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  input,
  output,
  viewChild,
} from '@angular/core';

export type ModalSize = 'sm' | 'lg';

/**
 * Popup baseado no <dialog> nativo: foco preso no conteúdo, fecha com Esc,
 * no fundo escurecido ou via `close()`. Abre assim que é renderizado —
 * controle a exibição com `@if` no componente pai.
 */
@Component({
  selector: 'app-modal',
  template: `
    <dialog
      #dialog
      class="modal"
      [class.modal--lg]="size() === 'lg'"
      [attr.aria-labelledby]="labelledBy()"
      (close)="closed.emit()"
      (click)="onBackdropClick($event)"
    >
      <ng-content />
    </dialog>
  `,
  styleUrl: './modal.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Modal {
  private readonly dialog = viewChild.required<ElementRef<HTMLDialogElement>>('dialog');

  readonly size = input<ModalSize>('sm');
  /** Id do título do conteúdo, para leitores de tela. */
  readonly labelledBy = input<string>();
  readonly closed = output<void>();

  constructor() {
    afterNextRender(() => this.dialog().nativeElement.showModal());
  }

  close(): void {
    this.dialog().nativeElement.close();
  }

  protected onBackdropClick(event: MouseEvent): void {
    if (event.target === this.dialog().nativeElement) this.close();
  }
}
