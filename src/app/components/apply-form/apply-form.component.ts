import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { INgxMyDpOptions } from 'ngx-mydatepicker';
import { Router } from '../../../../node_modules/@angular/router';
import { Applicant, ISeoData } from '../../models';
import { ApplicantsService, SeoService } from '../../services';
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
  maxDate = new Date(new Date().getFullYear() - 5, 7, 31);

  formResult: any;
  loading = false;
  success = false;
  openModal = false;
  targetUrl: string;

  mobileQuery: MediaQueryList;

  constructor(
    public fb: FormBuilder,
    public changeDetectorRef: ChangeDetectorRef,
    public media: MediaMatcher,
    public route: Router,
    public applicantsService: ApplicantsService,
    private _seoService: SeoService
  ) {}

  private _mobileQueryListener: () => void;

  ngOnInit() {
    this.initFormControls();
    this.initForm();
    this.setSeo();
    this.myOptions = myDatePickerOptions;

    // Detect mobile devices
    this.mobileQuery = this.media.matchMedia('screen and (max-width: 768px)');
    this._mobileQueryListener = () => this.changeDetectorRef.detectChanges();
    // this.mobileQuery.addEventListener('change', this._mobileQueryListener);
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy() {
    this.openModal = true;
    // this.mobileQuery.removeEventListener('change', this._mobileQueryListener);
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  initFormControls(): void {
    this.firstName = new FormControl('', [Validators.required, Validators.maxLength(20)]);
    this.lastName = new FormControl('', [Validators.required, Validators.maxLength(20)]);
    this.birthdate = new FormControl(null, Validators.required);
    this.parentsNames = new FormControl('', [Validators.required, Validators.maxLength(40)]);
    this.phoneNumber = new FormControl('', [Validators.required, validatePhoneNumber]);
    this.email = new FormControl('', validateEmail);
    this.message = new FormControl('', Validators.maxLength(500));
    this.recaptcha = new FormControl('');
  }

  initForm(): void {
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

  setSeo() {
    const metaData: ISeoData = {
      url: 'upisi',
      type: 'website',
      linkTitle: 'Glazbaonica - Upisi u Glazbeni Vrtić',
      description: 'Upisi u tijeku',
      image: 'https://www.glazbaonica.com/assets/images/vrtic2.jpeg'
    };
    this._seoService.setTitleAndMeta('Upisi u Glazbeni Vrtić', metaData);
  }

  onSubmit(): void {
    if (this.applyForm.valid) {
      let newDate: Date;
      if (this.birthdate.value.jsdate) {
        newDate = new Date(this.birthdate.value.jsdate);
        this.updateDesktopDateFormat(this.birthdate.value.jsdate);
      } else {
        newDate = new Date(this.birthdate.value);
        this.updateMobileDateFormat(this.birthdate.value);
      }
      const applicantData = {
        ...this.applyForm.value,
        dateCreated: new Date().toISOString()
      } as Applicant;
      this.saveApplicant(applicantData);
    }
  }

  updateMobileDateFormat(mobileDate: string): void {
    this.applyForm.patchValue({
      birthdate: new Date(mobileDate).toISOString()
    });
  }

  updateDesktopDateFormat(desktopDate: any): void {
    this.applyForm.patchValue({
      birthdate: new Date(desktopDate).toISOString()
    });
  }

  saveApplicant(applicantData: Applicant): void {
    this.loading = true;
    this.applicantsService
      .addApplicant(applicantData)
      .then(() => {
        this.loading = false;
        this.success = true;
        // this.recaptcha.reset();
        this.applyForm.reset();
      })
      .catch(error => console.log('error occured', error));
  }

  resetForm(): void {
    this.success = false;
    // this.recaptcha.reset();
    this.applyForm.reset();
  }

  handleSuccess(response: any): void {
    this.recaptcha.setValue(response);
    this.onSubmit();
  }

  canDeactivate(targetUrl: string, currentUrl: string): boolean {
    this.targetUrl = '/' + targetUrl;
    this.route.navigateByUrl(currentUrl);

    if (!this.openModal) {
      return (this.openModal = true);
    }
    return true;
  }
}
