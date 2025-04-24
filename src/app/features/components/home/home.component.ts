import { Component } from '@angular/core';
import { BannerRightComponent } from "../../../shared/components/banner-right/banner-right.component";

@Component({
  selector: 'app-home',
  imports: [
    
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


  scrollToTop(): void {
    document.documentElement.scrollTop = -10; // Para navegadores modernos
    document.body.scrollTop = -10; // Para compatibilidad con algunos navegadores
  }
}
