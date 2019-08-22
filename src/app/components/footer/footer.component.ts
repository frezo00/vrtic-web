import { Component, OnInit } from '@angular/core';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  today: Date;
  facebookIcon = faFacebook;
  instagramIcon = faInstagram;
  mailIcon = faEnvelope;
  markerIcon = faMapMarkerAlt;
  phoneIcon = faPhone;

  constructor() {}

  ngOnInit() {
    this.today = new Date();
  }
}
