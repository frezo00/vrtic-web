import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { validateEmail, validatePhoneNumber } from '../../validators';

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
  recaptcha: FormControl;

  constructor(public fb: FormBuilder) {}

  ngOnInit() {
    this.initFormControls();
    this.initForm();
  }

  initFormControls() {
    this.firstName = new FormControl('', [
      Validators.required,
      Validators.maxLength(20)
    ]);
    this.lastName = new FormControl('', [
      Validators.required,
      Validators.maxLength(20)
    ]);
    this.birthdate = new FormControl('', Validators.required);
    this.parentsNames = new FormControl('', [
      Validators.required,
      Validators.maxLength(40)
    ]);
    this.phoneNumber = new FormControl('', [
      Validators.required,
      validatePhoneNumber
    ]);
    this.email = new FormControl('', validateEmail);
    this.message = new FormControl('', Validators.maxLength(500));
    this.recaptcha = new FormControl(null, Validators.required);
  }

  initForm() {
    this.applyForm = this.fb.group({
      firstName: this.firstName,
      lastName: this.lastName,
      birthdate: this.birthdate,
      parentsNames: this.parentsNames,
      phoneNumber: this.phoneNumber,
      email: this.email,
      message: this.message,
      recaptcha: this.recaptcha
    });
  }

  onSubmit() {
    console.log(this.applyForm.value);
  }

  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response ${captchaResponse}:`);
  }
}
