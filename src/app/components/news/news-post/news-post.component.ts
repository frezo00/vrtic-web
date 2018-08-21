import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DocumentSnapshot } from 'angularfire2/firestore';
import { faCalendarAlt, faUser } from '@fortawesome/free-regular-svg-icons';

import { NewsService } from '../news.service';
import { NewsPost } from '../../../models/news-post.model';

@Component({
  selector: 'app-news-post',
  templateUrl: './news-post.component.html',
  styleUrls: ['./news-post.component.scss']
})
export class NewsPostComponent implements OnInit, OnDestroy {
  calendarIcon = faCalendarAlt;
  userIcon = faUser;

  private newsSub: any;
  newsPost: NewsPost;
  loading = false;

  constructor(
    private route: ActivatedRoute,
    private newsService: NewsService,
    private location: Location
  ) {}

  ngOnInit() {
    this.newsSub = this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.getNewsPost(id);
    });
  }

  ngOnDestroy() {
    this.newsSub.unsubscribe();
  }

  getNewsPost(id: string): void {
    this.loading = true;
    this.newsService
      .getNewsPost(id)
      .then((newsPost: DocumentSnapshot<NewsPost>) => {
        this.newsPost = newsPost.data();
        this.loading = false;
      })
      .catch(error => console.log(error));
  }
}
