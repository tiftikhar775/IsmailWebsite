import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <h1>hello {{title}}</h1>
  `,
  styles: [`
    h1 {
      color: blue;
    }
    
  `],
})
export class AppComponent {
  title = 'portfolio website';
}
