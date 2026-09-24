import { FormControl } from '@angular/forms';
import { brazilianPhoneValidator } from './phone.validator';

describe('brazilianPhoneValidator', () => {
  const validate = (value: string) =>
    brazilianPhoneValidator(new FormControl(value, { nonNullable: true }));

  it('aceita celular e fixo com DDD, com ou sem máscara', () => {
    expect(validate('11999998888')).toBeNull();
    expect(validate('(11) 3333-4444')).toBeNull();
  });

  it('rejeita números sem DDD', () => {
    expect(validate('99998888')).toEqual({ phone: true });
  });
});
