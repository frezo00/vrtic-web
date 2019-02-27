import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { NewsPost, NewsPostWithID } from '../models/news-post.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private newsCollection: AngularFirestoreCollection<NewsPost>;
  news: Observable<NewsPost[]>;

  constructor(private afDB: AngularFirestore) {
    this.newsCollection = this.afDB.collection<NewsPost>('/news');
    this.news = this.newsCollection.valueChanges();
  }

  getNews(): Observable<NewsPost[]> {
    return this.afDB
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

  getNewsPost(id: string): Promise<any> {
    return this.newsCollection.doc<NewsPost>(id).ref.get();
  }
}
