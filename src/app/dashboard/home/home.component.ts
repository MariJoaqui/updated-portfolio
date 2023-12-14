import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

// Interfaces
import { Links } from 'src/app/shared/interfaces/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('slider', { static: true }) slider!: ElementRef;
  currentIndex = 0; 

  image!           : string;
  information!     : string;
  description!     : number;
  shortDescription!: string;

  buttons: Links[] = [
    { name: 'Habilidades', link: 1, scroll: "" },
    { name: 'Intereses', link: 2, scroll: "" },
    { name: 'Otros', link: 3, scroll: "" }
  ];

  constructor( private el: ElementRef ) { }

  ngOnInit() { 
    this.showInfo(1); 
  }

  showInfo( info: number | string ) {
    if ( info === 1 ) {
      this.image = '../../../assets/img/skills.png';
      this.information = 'Habilidades';
      this.description = 1;
      this.shortDescription = 'Me gusta plasmar mis ideas visualmente antes de llevarlas al código. Disfruto creando diseños previos en programas especializados, asegurando un enfoque estético y funcional en cada proyecto.';
    }
    else if ( info === 2 ) {
      this.image = '../../../assets/img/interests.png';
      this.information = 'Intereses';
      this.description = 2;
      this.shortDescription = '';
    }
    else if ( info === 3 ) {
      this.image = '../../../assets/img/others.png';
      this.information = 'Otros';
      this.description = 3;
      this.shortDescription = 'Estas actividades me permiten expresar mi creatividad y me ayudan a mantener un equilibrio en mi vida.';
    }
  }

  next() {
    const items = this.slider.nativeElement.getElementsByClassName('item');
    this.slider.nativeElement.appendChild(items[0]);
    this.currentIndex = (this.currentIndex + 1) % items.length;
  }

  prev() {
    const items = this.slider.nativeElement.getElementsByClassName('item');
    const lastItem = items[items.length - 1];
    this.slider.nativeElement.insertBefore(lastItem, items[0]);
    this.currentIndex = (this.currentIndex - 1 + items.length) % items.length;
  }
}
