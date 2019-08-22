import { Component, OnInit } from '@angular/core';

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
  constructor() {}

  ngOnInit() {}
}
