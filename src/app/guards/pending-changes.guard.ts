import { Injectable } from '@angular/core';
import {
  CanDeactivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { FormGroup } from '@angular/forms';

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
export class PendingChangesGuard
  implements CanDeactivate<CanComponentDeactivate> {
  canDeactivate(
    component: CanComponentDeactivate,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
    return component.applyForm.dirty && !component.openModal
      ? component.canDeactivate(state.root.url, state.url)
      : true;
  }
}
