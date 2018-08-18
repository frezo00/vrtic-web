import { Component, OnInit } from '@angular/core';
import { faCalendarAlt, faUser } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  calendarIcon = faCalendarAlt;
  userIcon = faUser;

  constructor() { }

  ngOnInit() {
  }

}
