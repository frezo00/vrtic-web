import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-subheader',
  templateUrl: './subheader.component.html',
  styleUrls: ['./subheader.component.scss']
})
export class SubheaderComponent implements OnInit {
  @Input()
  title: string;
  @Input()
  subtitle: string;

  constructor() {}

  ngOnInit() {}
}
