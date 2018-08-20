import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DocumentSnapshot } from 'angularfire2/firestore';

import { NewsService } from '../news.service';
import { NewsPost } from '../../../models/news-post.model';

@Component({
  selector: 'app-news-post',
  templateUrl: './news-post.component.html',
  styleUrls: ['./news-post.component.scss']
})
export class NewsPostComponent implements OnInit, OnDestroy {
  private newsSub: any;
  newsPost: NewsPost;

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
    this.newsService
      .getNewsPost(id)
      .then((newsPost: DocumentSnapshot<NewsPost>) => {
        console.log('news data', newsPost.data());
        this.newsPost = newsPost.data();
      })
      .catch(error => console.log(error));
  }
}
