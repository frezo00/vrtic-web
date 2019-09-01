import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  confirmed = false;
  private _showModal$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public readonly showModal$: Observable<boolean> = this._showModal$.asObservable();

  constructor() {}

  setShowModal(show: boolean, confirmed: boolean) {
    this._showModal$.next(show);
    this.confirmed = confirmed;
  }
}
