import { Component, OnInit } from '@angular/core';
import { faCalendarAlt, faUser } from '@fortawesome/free-regular-svg-icons';

import { NewsService } from '../../../services';
import { NewsPostWithID } from '../../../models/news-post.model';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {
  calendarIcon = faCalendarAlt;
  userIcon = faUser;

  news: NewsPostWithID[];
  loading = false;

  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.getNews();
  }

  getNews() {
    this.loading = true;
    this.newsService.getNews().subscribe(
      (news: NewsPostWithID[]) => {
        this.news = news;
        this.loading = false;
      },
      error => console.log(error)
    );
  }
}
