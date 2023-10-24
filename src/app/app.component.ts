import { Component, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

// Interfaces
import { Links } from './shared/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

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
