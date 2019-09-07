import { Component, OnInit } from '@angular/core';
import { faEdit } from '@fortawesome/free-regular-svg-icons';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Applicant, ISeason } from '../../models';
import { ApplicantsService } from '../../services';

@Component({
  selector: 'app-applicants',
  templateUrl: './applicants.component.html',
  styleUrls: ['./applicants.component.scss']
})
export class ApplicantsComponent implements OnInit {
  applicants$: Observable<Applicant[]>;
  loading: boolean;
  showForm: boolean;
  activeSeason: ISeason;
  seasons: ISeason[] = [
    {
      text: '2019/20',
      startDate: '2019-08-19T22:00:00.000Z',
      endDate: '2020-08-19T22:00:00.000Z'
    },
    {
      text: '2018/19',
      startDate: '2018-08-19T22:00:00.000Z',
      endDate: '2019-08-19T22:00:00.000Z'
    }
  ];
  formIcon = faEdit;
  activeDetails = -1;

  constructor(private applicantsService: ApplicantsService) {}

  ngOnInit() {
    this.activeSeason = this.seasons[0];
    this.showForm = false;
    this.applicants$ = this.getApplicants(this.activeSeason);
  }

  toggleForm(): void {
    this.showForm = !this.showForm;
    if (this.activeSeason) {
      this.activeSeason = null;
    }
  }

  setActiveSeason(season: ISeason): void {
    this.activeSeason = season;
    this.applicants$ = this.getApplicants(this.activeSeason);
    if (this.showForm) {
      this.showForm = false;
    }
  }

  showInfo(index: number): void {
    if (index === this.activeDetails) {
      this.activeDetails = -1;
    } else {
      this.activeDetails = index;
    }
  }

  getApplicants(season: ISeason): Observable<Applicant[]> {
    this.loading = true;
    return this.applicantsService.getApplicants().pipe(
      map(applicants =>
        applicants.filter(applicant =>
          moment(applicant.dateCreated).isBetween(moment(season.startDate), moment(season.endDate))
        )
      ),
      tap(_ => (this.loading = false))
    );
  }
}
