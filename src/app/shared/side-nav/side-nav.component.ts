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
  constructor( private drawerService: DrawerService ) {}

  @ViewChild('drawer') drawer!: MatDrawer;

  links: Links[] = [
    { name: "Sobre mí", link: "" },
    { name: "Habilidades", link: "" },
    { name: "Experiencia", link: "" },
    { name: "Contacto", link: "" }  
  ];

  toggleDrawer() {
    this.drawerService.toggleDrawer();
  }
}
