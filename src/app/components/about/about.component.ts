import { Component, OnInit } from '@angular/core';
import { faAward, faDrum, faLayerGroup, faMusic, faUsers } from '@fortawesome/free-solid-svg-icons';
import { ISeoData } from '../../models';
import { SeoService } from '../../services';

@Component({
  selector: 'app-about',
  template: `
    <div class="about__container">
      <app-subheader
        [title]="'O nama'"
        [subtitle]="'Sve informacije o Glazbaonici'"
      ></app-subheader>
      <app-about-home style="background-color: white;"></app-about-home>
    </div>
  `,
  styles: [
    `
      .about-container {
        display: flex;
        flex-direction: column;
      }
    `
  ]
})
export class AboutComponent implements OnInit {
  whoWeAreIcon = faUsers;
  structureIcon = faLayerGroup;
  activitiesIcon = faDrum;
  whyUsIcon = faAward;
  musicIcon = faMusic;

  constructor(private _seoService: SeoService) {}

  ngOnInit() {
    const metaData: ISeoData = {
      url: 'about',
      type: 'website',
      linkTitle: 'Glazbaonica - O nama',
      description: 'Sve informacije o Glazbaonici',
      image: 'https://www.glazbaonica.com/assets/images/vrtic2.jpeg'
    };
    this._seoService.setTitleAndMeta('O nama', metaData);
  }
}
