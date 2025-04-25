import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  scrollToTop(): void {
    document.documentElement.scrollTop = -10;
    document.body.scrollTop = -10;
  }
}
