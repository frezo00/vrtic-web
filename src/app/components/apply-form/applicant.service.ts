import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from 'angularfire2/firestore';
import { Applicant } from '../../models/applicant.model';

@Injectable()
export class ApplicantService {
  private applicantsCollection: AngularFirestoreCollection<Applicant>;
  applicants: Observable<Applicant[]>;

  constructor(private afDB: AngularFirestore) {
    this.applicantsCollection = this.afDB.collection<Applicant>('/applicants');
    this.applicants = this.applicantsCollection.valueChanges();
  }

  addApplicant(applicantData: Applicant): Promise<any> {
    return this.applicantsCollection.add(applicantData);
  }

  getApplicants(): Observable<Applicant[]> {
    return this.afDB
      .collection<Applicant>('applicants', ref =>
        ref.orderBy('dateCreated', 'desc')
      )
      .valueChanges();
  }
}
