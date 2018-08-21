import { Component, OnInit } from '@angular/core';
import {
  faUsers,
  faLayerGroup,
  faDrum,
  faAward,
  faMusic
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about-home',
  templateUrl: './about-home.component.html',
  styleUrls: ['./about-home.component.scss']
})
export class AboutHomeComponent implements OnInit {
  whoWeAreIcon = faUsers;
  structureIcon = faLayerGroup;
  activitiesIcon = faDrum;
  whyUsIcon = faAward;
  musicIcon = faMusic;

  constructor() {}

  ngOnInit() {}
}
