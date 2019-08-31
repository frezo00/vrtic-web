import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ISeoData } from '../models';

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private _baseUrl = 'https://www.glazbaonica.com/';

  constructor(private _title: Title, private _meta: Meta) {}

  setTitleAndMeta(title: string, metaData: ISeoData) {
    this._title.setTitle(`Glazbaonica - ${title}`);

    if (metaData) {
      this._meta.updateTag({ property: 'og:type', content: metaData.type });
      this._meta.updateTag({ property: 'og:url', content: this._baseUrl + metaData.url });
      this._meta.updateTag({ property: 'og:title', content: metaData.linkTitle });
      this._meta.updateTag({ property: 'og:description', content: metaData.description });
      this._meta.updateTag({ property: 'og:image', content: metaData.image });
    }
  }
}
