import { CommonModule, ViewportScroller } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { ActiveSectionService } from '../../../core/active-section.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isMenuOpen = false;

  constructor(private viewportScroller: ViewportScroller,private activeSectionService: ActiveSectionService) { }





  // scrollToSection(section: string) {
  //   this.viewportScroller.scrollToAnchor(section);
  // }


  activeSection: string = '';

  scrollToSection(sectionId: string) {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    this.activeSection = sectionId;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const sections = ['section1', 'section2', 'section3', 'section4', 'section5', 'section6'];
    let currentSection = '';

    sections.forEach(sectionId => {
      const section = document.getElementById(sectionId);
      if (section) {
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top;
        const sectionBottom = rect.bottom;
        const windowHeight = window.innerHeight;

        // Calculate if section is 60% into view
        if (sectionTop < windowHeight * 0.4 && sectionBottom > windowHeight * 0.4) {
          currentSection = sectionId;
        }
      }
    });

    this.activeSection = currentSection;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    const menu = document.getElementById('menu');
    if (menu) {
      menu.classList.toggle('hidden');
    }
  }
}
