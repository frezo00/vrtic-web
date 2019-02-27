import { Component, OnInit } from '@angular/core';
import { Applicant } from '../../models/applicant.model';
import { ApplicantsService } from '../../services';

@Component({
  selector: 'app-applicants',
  templateUrl: './applicants.component.html',
  styleUrls: ['./applicants.component.scss']
})
export class ApplicantsComponent implements OnInit {
  applicants: Applicant[];
  activeDetails = -1;
  loading = false;

  constructor(private applicantsService: ApplicantsService) {}

  ngOnInit() {
    this.loadApplicants();
  }

  loadApplicants(): void {
    this.loading = true;
    this.applicantsService.getApplicants().subscribe(
      (applicants: Applicant[]) => {
        this.applicants = applicants;
        this.loading = false;
      },
      error => console.log(error)
    );
  }

  showInfo(index: number): void {
    if (index === this.activeDetails) {
      this.activeDetails = -1;
    } else {
      this.activeDetails = index;
    }
  }
}
