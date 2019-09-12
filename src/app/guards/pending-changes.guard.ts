import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { ApplyFormComponent } from '../components/apply-form/apply-form.component';
import { ModalService } from '../services';

export interface CanComponentDeactivate {
  form: ApplyFormComponent;
  targetUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class PendingChangesGuard implements CanDeactivate<CanComponentDeactivate> {
  constructor(private _modalService: ModalService) {}

  canDeactivate(
    component: CanComponentDeactivate,
    _currentRoute: ActivatedRouteSnapshot,
    _currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot
  ) {
    if (
      component.form &&
      this._hasChanges(component.form.applyForm) &&
      !this._modalService.confirmed
    ) {
      component.targetUrl = nextState.url;
      this._modalService.setShowModal(true, false);
      return !this._modalService.showModal$;
    }
    return true;
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
