import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Output()
  cancel: EventEmitter<boolean> = new EventEmitter();
  @Output()
  confirm: EventEmitter<boolean> = new EventEmitter();

  cancelIcon = faTimes;

  constructor() {}

  ngOnInit() {}

  onCancel() {
    this.cancel.emit();
  }

  onConfirm() {
    this.confirm.emit();
  }
}
