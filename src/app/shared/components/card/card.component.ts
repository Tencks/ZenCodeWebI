import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  scrollToTop(): void {
    document.documentElement.scrollTop = -10; // Para navegadores modernos
    document.body.scrollTop = -10; // Para compatibilidad con algunos navegadores
  }

}