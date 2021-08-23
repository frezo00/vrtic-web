import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { faFacebookSquare, faInstagram, faWhatsappSquare } from '@fortawesome/free-brands-svg-icons';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { CanComponentDeactivate } from '../../guards/pending-changes.guard';
import { ISeoData } from '../../models';
import { ModalService, SeoService } from '../../services';
import { ApplyFormComponent } from '../apply-form/apply-form.component';

@Component({
  selector: 'app-enrollment',
  templateUrl: './enrollment.component.html',
  styleUrls: ['./enrollment.component.scss']
})
export class EnrollmentComponent implements OnInit, OnDestroy, CanComponentDeactivate {
  @ViewChild(ApplyFormComponent, { static: false }) form: ApplyFormComponent;

  expirationDate: moment.Moment;
  isExpired: boolean;
  targetUrl: string;
  openModal$: Observable<boolean>;

  facebookIcon = faFacebookSquare;
  instagramIcon = faInstagram;
  whatsappIcon = faWhatsappSquare;

  constructor(private _modalService: ModalService, private _seoService: SeoService) {}

  ngOnInit(): void {
    this._setSEO();
    this.expirationDate = moment('09/09/2021', 'DD/MM/YYYY');
    this.isExpired = moment().isSameOrAfter(this.expirationDate, 'date');
    this.openModal$ = this._modalService.showModal$;
  }

  ngOnDestroy(): void {
    this._modalService.confirmed = false;
  }

  private _setSEO() {
    const metaData: ISeoData = {
      url: 'upisi',
      type: 'website',
      linkTitle: 'Glazbaonica - Upisi u Glazbeni Vrtić',
      description: 'Upisi u tijeku',
      image: 'https://www.glazbaonica.com/assets/images/vrtic2.jpeg'
    };
    this._seoService.setTitleAndMeta('Upisi u Glazbeni Vrtić', metaData);
  }
}
