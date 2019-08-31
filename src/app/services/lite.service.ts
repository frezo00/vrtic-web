import { Injectable } from '@angular/core';
import { AngularFireLiteFirestore } from 'angularfire-lite';
import { Observable, of } from 'rxjs';
import { catchError, filter, tap } from 'rxjs/operators';
import { ISeoData, NewsPost } from '../models';
import { SeoService } from './seo.service';

@Injectable({
  providedIn: 'root'
})
export class LiteService {
  constructor(private _aflDB: AngularFireLiteFirestore, private _seoService: SeoService) {}

  getNewsArticle(id: string): Observable<NewsPost | void> {
    return this._aflDB.read(`news/${id}`).pipe(
      filter((article: NewsPost) => article && !!article.title),
      tap((article: NewsPost) => {
        const seoData: ISeoData = {
          url: `news/${id}`,
          type: 'article',
          linkTitle: article.title,
          description: article.description,
          image: article.coverImage
        };
        this._seoService.setTitleAndMeta(article.title, seoData);
      }),
      // TODO: Write Error component to catch any HTTP errors
      catchError(error => of(console.error('error', error)))
    );
  }
}
