import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import KeenSlider, { KeenSliderInstance } from "keen-slider"

// Interfaces
import { Cards, Links } from 'src/app/shared/interfaces/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [
    '../../../../node_modules/keen-slider/keen-slider.min.css',
    './home.component.css'
  ]
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild("sliderRef") sliderRef!: ElementRef<HTMLElement>

  // Variables y arreglos
  image!: string;
  information!: string;
  description!: number;
  shortDescription!: string;
  slider!: KeenSliderInstance | null;

  buttons: Links[] = [
    { name: 'Habilidades', link: 1, scroll: "" },
    { name: 'Intereses', link: 2, scroll: "" },
    { name: 'Otros', link: 3, scroll: "" }
  ];

  cards: Cards[] = [
    { title: "Primero", description: "descripcion aqui", image: "", time: "aqui va el tiempo" },
    { title: "Segundo", description: "descripcion aqui", image: "", time: "aqui va el tiempo" },
    { title: "Tercero", description: "descripcion aqui", image: "", time: "aqui va el tiempo" },
    { title: "Cuarto", description: "descripcion aqui", image: "", time: "aqui va el tiempo" }
  ];

  // OnInit
  ngOnInit() {
    this.showInfo(1);
  }

  // Procedimientos
  showInfo(info: number | string) {
    if (info === 1) {
      this.image = '../../../assets/img/skills.png';
      this.information = 'Habilidades';
      this.description = 1;
      this.shortDescription = 'Me gusta plasmar mis ideas visualmente antes de llevarlas al código. Disfruto creando diseños previos en programas especializados, asegurando un enfoque estético y funcional en cada proyecto.';
    }
    else if (info === 2) {
      this.image = '../../../assets/img/interests.png';
      this.information = 'Intereses';
      this.description = 2;
      this.shortDescription = '';
    }
    else if (info === 3) {
      this.image = '../../../assets/img/others.png';
      this.information = 'Otros';
      this.description = 3;
      this.shortDescription = 'Estas actividades me permiten expresar mi creatividad y me ayudan a mantener un equilibrio en mi vida.';
    }
  }

  ngAfterViewInit() {
    this.slider = new KeenSlider(this.sliderRef.nativeElement, {
      breakpoints: {
        "(min-width: 400px)": {
          slides: { perView: 2, spacing: 5 },
        },
        "(min-width: 1000px)": {
          slides: { perView: 3, spacing: 10 },
        },
      },
      slides: { perView: 1 },
    })
  }
}
