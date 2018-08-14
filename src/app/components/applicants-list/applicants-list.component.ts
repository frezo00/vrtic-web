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
  activeDetails = -1;

  constructor(private applicantService: ApplicantService) {}

  ngOnInit() {
    this.applicantService.getApplicants().subscribe(
      (applicants: Applicant[]) => {
        console.log('data: ', applicants);
        console.log('date: ', new Date(applicants[0].birthdate));
        this.applicants = applicants;
      },
      error => console.log(error)
    );
  }

  showInfo(index: number) {
    if (index === this.activeDetails) {
      this.activeDetails = -1;
    } else {
      this.activeDetails = index;
    }
    console.log(this.activeDetails);
  }
}
