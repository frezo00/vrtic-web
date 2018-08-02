import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-apply-form',
  templateUrl: './apply-form.component.html',
  styleUrls: ['./apply-form.component.scss']
})
export class ApplyFormComponent implements OnInit {
  applyForm: FormGroup;
  firstName: FormControl;
  lastName: FormControl;
  birthdate: FormControl;
  parentsNames: FormControl;
  phoneNumber: FormControl;
  email: FormControl;
  message: FormControl;

  constructor(public fb: FormBuilder) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.firstName = new FormControl('', Validators.required);
    this.lastName = new FormControl('', Validators.required);
    this.birthdate = new FormControl('', Validators.required);
    this.parentsNames = new FormControl('', Validators.required);
    this.phoneNumber = new FormControl('', Validators.required);
    this.email = new FormControl('', Validators.email);
    this.message = new FormControl('');

    this.applyForm = this.fb.group({
      firstName: this.firstName,
      lastName: this.lastName,
      birthdate: this.birthdate,
      parentsNames: this.parentsNames,
      phoneNumber: this.phoneNumber,
      email: this.email,
      message: this.message
    });
  }

  onSubmit() {
    console.log(this.applyForm.value);
  }
}
