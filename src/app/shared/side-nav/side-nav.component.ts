import { Component, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

// Services
import { DrawerService } from '../../services/drawer.service';

// Interfaces
import { Links } from '../interfaces/interfaces';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {
  constructor(private drawerService: DrawerService) { }

  @ViewChild('drawer') drawer!: MatDrawer;

  links: Links[] = [
    { name: "Sobre mí", link: "", scroll: "about-me" },
    { name: "Habilidades", link: "", scroll: "" },
    { name: "Experiencia", link: "", scroll: "" },
    { name: "Contacto", link: "", scroll: "" }
  ];

  toggleDrawer() {
    this.drawerService.toggleDrawer();
  }
}
