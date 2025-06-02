import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';




import { faHome, faUser, faProjectDiagram, faLaptopCode, faEnvelope,faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, FontAwesomeModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  faHome = faHome;
  faUser = faUser;




  
  faProjectDiagram = faProjectDiagram;
  faLaptopCode = faLaptopCode;
  faEnvelope = faEnvelope;
 

  menuOpen = false;
 
  isDarkMode = false; // Track dark mode state
  faMoon = faMoon;
  faSun = faSun;
 

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }
toggleDarkMode() {
  this.isDarkMode = !this.isDarkMode;
  if (this.isDarkMode) {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }
}
}

