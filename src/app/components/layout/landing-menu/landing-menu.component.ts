import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { HeroSectionComponent } from "../hero-section/hero-section.component";
import { FeatureSectionComponent } from "../feature-section/feature-section.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-landing-menu',
  standalone: true,
  imports: [HeaderComponent, HeroSectionComponent, FeatureSectionComponent, FooterComponent],
  templateUrl: './landing-menu.component.html',
  styleUrl: './landing-menu.component.scss'
})
export class LandingMenuComponent {

}
