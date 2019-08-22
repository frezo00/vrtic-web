import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from '@angular/fire/firestore';
import { Applicant } from '../models/applicant.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApplicantsService {
  private applicantsCollection: AngularFirestoreCollection<Applicant>;
  applicants$: Observable<Applicant[]>;

  constructor(private afDB: AngularFirestore) {
    this.applicantsCollection = this.afDB.collection<Applicant>('/applicants');
    this.applicants$ = this.applicantsCollection.valueChanges();
  }

  addApplicant(applicantData: Applicant): Promise<any> {
    return this.applicantsCollection.add(applicantData);
  }

  getApplicants(): Observable<Applicant[]> {
    return this.afDB
      .collection<Applicant>('applicants', ref =>
        ref.orderBy('dateCreated', 'desc')
      )
      .snapshotChanges()
      .pipe(
        map(applicants =>
          applicants.map(a => {
            const data = a.payload.doc.data() as Applicant;
            const id = a.payload.doc.id;
            return { id, ...data } as Applicant;
          })
        )
      );
  }
}
