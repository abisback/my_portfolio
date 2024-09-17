import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActiveSectionService {

  constructor() { }

  private activeSectionSubject = new BehaviorSubject<string>('');
  activeSection$ = this.activeSectionSubject.asObservable();

  setActiveSection(sectionId: string): void {
    this.activeSectionSubject.next(sectionId);
  }


}
