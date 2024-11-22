import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, NavBarComponent],
  template: `
    <app-nav-bar></app-nav-bar>

    <app-home></app-home>

  `,
  styles: [`

  `],
})
export class AppComponent {
  title = 'portfolio website';
}
