import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-subheader',
  template: `
    <div class="subheader__container container">
      <div class="subheader__content">
        <h2 class="subheader__title">{{ title }}</h2>
        <p *ngIf="!!subtitle" class="subheader__info">{{ subtitle }}</p>
      </div>
    </div>
  `,
  styleUrls: ['./subheader.component.scss']
})
export class SubheaderComponent implements OnInit {
  @Input() title: string;
  @Input() subtitle: string;

  constructor() {}

  ngOnInit() {}
}
