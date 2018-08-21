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
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
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
