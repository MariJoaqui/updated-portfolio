import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';

// Services
import { DrawerService } from '../../services/drawer.service';

// Interfaces
import { Links } from '../interfaces/interfaces';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private drawerService: DrawerService) { }

  links: Links[] = [
    { name: "Sobre mí", link: "", scroll: "about-me" },
    { name: "Habilidades", link: "", scroll: "skills" },
    { name: "Experiencia", link: "", scroll: "experience" },
    { name: "Contacto", link: "", scroll: "" }
  ];

  // Scroll en la página
  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
  }

  toggleDrawer() {
    this.drawerService.toggleDrawer();
  }
}
