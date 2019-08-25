import { Component, OnInit } from '@angular/core';
import { ISeoData } from '../../models';
import { SeoService } from '../../services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private _seoService: SeoService) {}

  ngOnInit() {
    const metaData: ISeoData = {
      url: '',
      type: 'website',
      linkTitle: 'Početna',
      description: 'Glazbeni vrtić - nove glazbene radosti kreću i ove jeseni. Pridruži nam se.',
      image: 'https://www.glazbaonica.com/assets/images/vrtic2.jpeg'
    };
    this._seoService.setTitleAndMeta('Početna', metaData);
  }
}
