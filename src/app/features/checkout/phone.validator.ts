import { AbstractControl, ValidationErrors } from '@angular/forms';

/** Aceita telefone brasileiro com DDD (10 ou 11 dígitos), com ou sem máscara. */
export function brazilianPhoneValidator(control: AbstractControl<string>): ValidationErrors | null {
  const digits = (control.value ?? '').replace(/\D/g, '');
  if (!digits) return null;
  return digits.length === 10 || digits.length === 11 ? null : { phone: true };
}
