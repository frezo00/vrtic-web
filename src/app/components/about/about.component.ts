import { Component, OnInit } from '@angular/core';
import {
  faUsers,
  faLayerGroup,
  faDrum,
  faAward,
  faMusic
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about',
  template: `
    <div class="about__container">
      <app-subheader [title]="'O nama'" [subtitle]="'Sve informacije o Glazbaonici'"></app-subheader>
      <app-about-home style="background-color: white;"></app-about-home>
    </div>
  `,
  styles: [`
    .about-container {
      display: flex;
      flex-direction: column;
    }
  `]
})
export class AboutComponent implements OnInit {
  whoWeAreIcon = faUsers;
  structureIcon = faLayerGroup;
  activitiesIcon = faDrum;
  whyUsIcon = faAward;
  musicIcon = faMusic;

  constructor() {}

  ngOnInit() {}
}
