import { Component, OnInit } from '@angular/core';
import { ISeoData } from '../../models';
import { SeoService } from '../../services';

@Component({
  selector: 'app-news',
  template: `
    <div class="news__container">
      <app-subheader [title]="'Novosti'" [subtitle]="'Najnovije glazbene vijesti'"></app-subheader>
      <div class="news__content container">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  constructor(private _seoService: SeoService) {}

  ngOnInit() {
    const metaData: ISeoData = {
      url: 'novosti',
      type: 'website',
      linkTitle: 'Glazbaonica - Novosti',
      description: 'Najnovije glazbene vijesti',
      image: 'https://www.glazbaonica.com/assets/images/vrtic2.jpeg'
    };
    this._seoService.setTitleAndMeta('Novosti', metaData);
  }
}
