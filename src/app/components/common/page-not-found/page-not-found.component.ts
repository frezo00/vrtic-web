import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
    <div class="pnf__container">
      <div class="pnf__content">
        <h1>404</h1>
        <p>Stranica nije pronađena</p>
      </div>
      <div class="pnf__action">
        <button class="action-button small" [routerLink]="['/']">
          Idi na početnu
        </button>
      </div>
    </div>
  `,
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
