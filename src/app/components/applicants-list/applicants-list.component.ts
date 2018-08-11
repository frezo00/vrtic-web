import { Component, OnInit } from '@angular/core';
import { ApplicantService } from '../apply-form/applicant.service';
import { Applicant } from '../../models/applicant.model';

@Component({
  selector: 'app-applicants-list',
  templateUrl: './applicants-list.component.html',
  styleUrls: ['./applicants-list.component.scss']
})
export class ApplicantsListComponent implements OnInit {
  applicants: Applicant[];

  constructor(private applicantService: ApplicantService) {}

  ngOnInit() {
    this.applicantService.getApplicants().subscribe(
      (applicants: Applicant[]) => {
        console.log('data: ', applicants);
        const date = applicants[0].birthdate.toDate() as Date;
        console.log('toDateString:', date.toDateString());
        console.log('toISOString:', date.toISOString());
        console.log('toLocaleDateString:', date.toLocaleDateString());
        console.log('toLocaleString:', date.toLocaleString());
        console.log('toLocaleTimeString:', date.toLocaleTimeString());
        console.log('toTimeString:', date.toTimeString());
        console.log('toString:', date.toString());
        this.applicants = applicants;
      },
      error => console.log(error)
    );
  }
}
