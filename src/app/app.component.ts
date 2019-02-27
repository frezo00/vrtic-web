import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="main-container">
      <app-header [ngStyle]="{ 'background-color': bgColor() }"></app-header>
      <router-outlet></router-outlet>
      <app-footer></app-footer>
    </div>
  `,
  styles: [
    `
      .main-container {
        display: flex;
        flex-direction: column;
      }
    `
  ]
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

  bgColor(): string {
    return `rgba(51,51,51,${this.alpha})`;
  }
}
