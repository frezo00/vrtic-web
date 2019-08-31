import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faCalendarAlt, faUser } from '@fortawesome/free-regular-svg-icons';
import { Subscription } from 'rxjs';
import { NewsPost } from '../../../models';
import { LiteService } from '../../../services';

@Component({
  selector: 'app-news-post',
  templateUrl: './news-post.component.html',
  styleUrls: ['./news-post.component.scss']
})
export class NewsPostComponent implements OnInit, OnDestroy {
  article: NewsPost;
  loading: boolean;
  private _paramSub: Subscription;
  private _articleSub: Subscription;

  calendarIcon = faCalendarAlt;
  userIcon = faUser;

  constructor(
    private _route: ActivatedRoute,
    private _liteService: LiteService,
    private _changeRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this._paramSub = this._route.paramMap.subscribe(params => this.getArticle(params.get('id')));
  }

  ngOnDestroy(): void {
    this._paramSub.unsubscribe();
    this._articleSub.unsubscribe();
  }

  getArticle(id: string): void {
    this._articleSub = this._liteService.getNewsArticle(id).subscribe((article: NewsPost) => {
      this.article = article;
      this.loading = false;
      this._changeRef.detectChanges();
    });
  }
}
