import { Component } from '@angular/core';

// Interfaces
import { Links } from '../interfaces';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  links: Links[] = [
    { name: "Sobre mí", link: "" },
    { name: "Habilidades", link: "" },
    { name: "Experiencia", link: "" },
    { name: "Contacto", link: "" }  
  ];

}
