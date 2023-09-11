import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

declare let gtag: Function;
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lpg';
//   constructor(private router: Router) {
//     this.router.events.subscribe(event => {
//         if (event instanceof NavigationEnd) {
//             // Send a pageview event to GTM on route changes
//             gtag('config', 'G-M5D30QTTZ0', {
//                 'page_path': event.urlAfterRedirects
//             });
//         }
//     });
// }
}
