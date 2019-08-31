import { Component, OnInit } from '@angular/core';
import { faCalendarAlt, faUser } from '@fortawesome/free-regular-svg-icons';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { NewsPostWithID } from '../../../models/news-post.model';
import { NewsService } from '../../../services';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {
  calendarIcon = faCalendarAlt;
  userIcon = faUser;

  news$: Observable<NewsPostWithID[]>;
  loading: boolean;

  constructor(private _newsService: NewsService) {}

  ngOnInit(): void {
    this.loading = true;
    this.news$ = this._newsService.getNews().pipe(tap(_ => (this.loading = false)));
  }
}
