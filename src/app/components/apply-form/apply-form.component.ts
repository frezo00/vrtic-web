import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { INgxMyDpOptions } from 'ngx-mydatepicker';
import { MediaMatcher } from '@angular/cdk/layout';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { validateEmail, validatePhoneNumber } from '../../validators';
import { myDatePickerOptions } from '../common/ngx-mydatepicker.options';

@Component({
  selector: 'app-apply-form',
  templateUrl: './apply-form.component.html',
  styleUrls: ['./apply-form.component.scss']
})
export class ApplyFormComponent implements OnInit, OnDestroy {
  applyForm: FormGroup;
  firstName: FormControl;
  lastName: FormControl;
  birthdate: FormControl;
  parentsNames: FormControl;
  phoneNumber: FormControl;
  email: FormControl;
  message: FormControl;
  recaptcha: FormControl;

  dateIcon = faCalendarAlt;
  myOptions: INgxMyDpOptions;
  defaultMonth = `01-${new Date().getFullYear() - 8}`;
  date = new Date(new Date().getFullYear() - 9, 0, 1);
  minDate = new Date(new Date().getFullYear() - 8, 0, 1);
  maxDate = new Date(new Date().getFullYear() - 5, 11, 31);

  formResult: any;
  loading = false;

  mobileQuery: MediaQueryList;

  constructor(
    public fb: FormBuilder,
    public changeDetectorRef: ChangeDetectorRef,
    public media: MediaMatcher
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 599px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  private _mobileQueryListener: () => void;

  ngOnInit() {
    this.initFormControls();
    this.initForm();
    this.myOptions = myDatePickerOptions;
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
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
    this.birthdate = new FormControl(null, Validators.required);
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
    console.log('val', this.birthdate);
    let newDate: Date;
    if (this.birthdate.value.jsdate) {
      newDate = new Date(this.birthdate.value.jsdate);
      this.updateDesktopDateFormat(this.birthdate.value.jsdate);
    } else {
      newDate = new Date(this.birthdate.value);
      this.updateMobileDateFormat(this.birthdate.value);
    }
    console.log('new Date', newDate);
    console.log('form value: ', this.applyForm.value);
  }

  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response ${captchaResponse}:`);
  }

  updateMobileDateFormat(mobileDate: string) {
    this.applyForm.patchValue({
      birthdate: new Date(mobileDate)
    });
  }

  updateDesktopDateFormat(desktopDate: any) {
    this.applyForm.patchValue({
      birthdate: new Date(desktopDate)
    });
  }

  openLoading() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 5000);
  }
}
