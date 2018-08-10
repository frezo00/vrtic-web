import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore } from 'angularfire2/firestore';
import { Applicant } from '../../models/applicant.model';

@Injectable()
export class ApplicantService {
  public applicants: Observable<any[]>;

  constructor(private afDB: AngularFirestore) {}

  addApplicant(applicantData: Applicant): Promise<any> {
    return this.afDB.collection('/applicants').add(applicantData);
  }
}
