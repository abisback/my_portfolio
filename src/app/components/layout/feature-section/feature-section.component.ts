import { ViewportScroller } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { ActiveSectionService } from '../../../core/active-section.service';

@Component({
  selector: 'app-feature-section',
  standalone: true,
  imports: [],
  templateUrl: './feature-section.component.html',
  styleUrl: './feature-section.component.scss'
})
export class FeatureSectionComponent {
  sectionId: string = '';
  constructor(private viewportScroller: ViewportScroller,private activeSectionService: ActiveSectionService) { }

  scrollToSection(section: string) {
    this.viewportScroller.scrollToAnchor(section);
  }
  ngAfterViewInit() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, options);

    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((element, index) => {
      setTimeout(() => {
        observer.observe(element);
      }, index * 100); // Adjust the delay as needed
    });
  }


  ngOnInit(): void {
    // Pass the section ID to the service when the component initializes
    this.activeSectionService.setActiveSection(this.sectionId);
  }


  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    const section = document.getElementById(this.sectionId);
    if (section) {
      const rect = section.getBoundingClientRect();
      const inView = rect.top >= 0 && rect.bottom <= window.innerHeight;

      if (inView) {
        this.activeSectionService.setActiveSection(this.sectionId);
      }
    }
  }





}
