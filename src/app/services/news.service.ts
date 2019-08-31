import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NewsPost, NewsPostWithID } from '../models/news-post.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  constructor(private _afDB: AngularFirestore) {}

  getNews(): Observable<NewsPostWithID[]> {
    return this._afDB
      .collection<NewsPost>('news', ref => ref.orderBy('datePosted', 'desc'))
      .snapshotChanges()
      .pipe(
        map(news =>
          news.map(newsPost => {
            const data = newsPost.payload.doc.data() as NewsPost;
            const id = newsPost.payload.doc.id;
            return { id, ...data } as NewsPostWithID;
          })
        )
      );
  }
}
