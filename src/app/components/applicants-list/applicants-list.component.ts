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
  loading = false;
  activeTab = 1;

  constructor(private applicantService: ApplicantService) {}

  ngOnInit() {
    this.loadApplicants();
  }

  loadApplicants(): void {
    this.loading = true;
    this.applicantService.getApplicants().subscribe(
      (applicants: Applicant[]) => {
        this.applicants = applicants;
        this.loading = false;
      },
      error => console.log(error)
    );
  }

  setActiveTab(tabNumber: number): void {
    if (this.activeTab !== tabNumber) {
      this.activeTab = tabNumber;
    }
  }

  showInfo(index: number): void {
    if (index === this.activeDetails) {
      this.activeDetails = -1;
    } else {
      this.activeDetails = index;
    }
  }
}
