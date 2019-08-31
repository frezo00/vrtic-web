import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

export interface CanComponentDeactivate {
  canDeactivate: (
    targetUrl: any,
    currentUrl: string
  ) => Observable<boolean> | Promise<boolean> | boolean;
  applyForm: FormGroup;
  openModal: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class PendingChangesGuard implements CanDeactivate<CanComponentDeactivate> {
  canDeactivate(
    component: CanComponentDeactivate,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
    return this._hasChanges(component.applyForm) && !component.openModal
      ? component.canDeactivate(state.root.url, state.url)
      : true;
  }

  private _hasChanges(form: FormGroup): boolean {
    if (form && form.controls) {
      return Object.keys(form.controls)
        .filter((key: string) => key !== 'recaptcha')
        .map((key: string) => form.controls[key])
        .some((control: AbstractControl) => control.dirty && control.touched && control.value);
    }
    return false;
  }
}
