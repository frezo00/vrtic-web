import { FormControl } from '@angular/forms';

export function validateOnlyNumber(c: FormControl) {
  const onlyNumberRegex = /^\d+$/;
  return onlyNumberRegex.test(c.value)
    ? null
    : {
        validateOnlyNumber: {
          valide: false
        }
      };
}
