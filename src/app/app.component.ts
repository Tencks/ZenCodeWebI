import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./shared/navbar/navbar.component";
import { HomeComponent } from "./features/components/home/home.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { CardComponent } from "./shared/components/card/card.component";
import { BannerRightComponent } from "./shared/components/banner-right/banner-right.component";
import { NewsComponent } from "./features/components/news/news.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, HomeComponent, FooterComponent, CardComponent, BannerRightComponent, NewsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ZenCodeWebI';
}
