import { Component } from '@angular/core';
import { DrawerService } from '../../services/drawer.service';
// Interfaces
import { Links } from '../interfaces/interfaces';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor( private drawerService: DrawerService ) {}

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
