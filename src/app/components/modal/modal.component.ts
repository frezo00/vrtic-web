import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { ModalService } from '../../services';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() targetUrl: string;
  cancelIcon = faTimes;

  constructor(private _modalService: ModalService, private _router: Router) {}

  onCancel(): void {
    this._modalService.setShowModal(false, false);
  }

  onConfirm(): void {
    this._modalService.setShowModal(false, true);
    this._router.navigateByUrl(this.targetUrl);
  }
}
