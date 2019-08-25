import { Component, OnDestroy, OnInit } from '@angular/core';
import { DocumentSnapshot } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { faCalendarAlt, faUser } from '@fortawesome/free-regular-svg-icons';
import { ISeoData, NewsPost } from '../../../models';
import { NewsService, SeoService } from '../../../services';

@Component({
  selector: 'app-news-post',
  templateUrl: './news-post.component.html',
  styleUrls: ['./news-post.component.scss']
})
export class NewsPostComponent implements OnInit, OnDestroy {
  newsPost: NewsPost;
  loading = false;
  calendarIcon = faCalendarAlt;
  userIcon = faUser;

  private newsSub: any;

  constructor(
    private route: ActivatedRoute,
    private newsService: NewsService,
    private _seoService: SeoService
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
        const seoData: ISeoData = {
          url: `novosti/${newsPost.id}`,
          type: 'article',
          linkTitle: this.newsPost.title,
          description: this.newsPost.description,
          image: this.newsPost.coverImage
        };
        this._seoService.setTitleAndMeta(this.newsPost.title, seoData);
        this.loading = false;
      })
      .catch(error => console.log(error));
  }
}
