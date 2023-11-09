import { Component, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

// Interfaces
import { Links } from '../interfaces/interfaces';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {

  @ViewChild('drawer') drawer!: MatDrawer;

  links: Links[] = [
    { name: "Sobre mí", link: "" },
    { name: "Habilidades", link: "" },
    { name: "Experiencia", link: "" },
    { name: "Contacto", link: "" }  
  ];

  // Cerrar menú lateral
  close() { this.drawer.close(); }

}
