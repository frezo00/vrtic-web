import { FormControl } from '@angular/forms';

export function validatePhoneNumber(c: FormControl) {
  // only 8 to 20 characters between brackets [- ./] allowed
  const phoneNumberRegex = /^[\- .\+0-9]{6,20}$/;
  // const phoneNumberRegex = /^(?:\(\d{3}\)|\d{3})[- ]?\d{3}[- ]?\d{3,4}$/;
  return phoneNumberRegex.test(c.value)
    ? null
    : {
        validatePhoneNumber: {
          valide: false
        }
      };
}
