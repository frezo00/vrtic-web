import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  alpha = 0;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const number =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    if (number === 0) {
      this.alpha = number;
    } else if (number > 0 && number <= 70) {
      this.alpha = number / 100;
    } else {
      this.alpha = 0.7;
    }
  }

  bgColor() {
    return `rgba(51,51,51,${this.alpha})`;
  }
}
