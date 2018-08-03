import { FormControl } from '@angular/forms';

export function validateEmail(c: FormControl) {
  /* tslint:disable-next-line */
  let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(c.value)
    ? null
    : {
        validateEmail: {
          valide: false
        }
      };
}
