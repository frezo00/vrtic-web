import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-success-confirm',
  templateUrl: './success-confirm.component.html',
  styleUrls: ['./success-confirm.component.scss']
})
export class SuccessConfirmComponent implements OnInit {
  @Output()
  resetForm: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onResetForm() {
    this.resetForm.emit(null);
  }
}
