import { Component, OnInit } from '@angular/core';

// Interfaces
import { Links } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  image!           : string;
  information!     : string;
  description!     : number;
  shortDescription!: string;

  buttons: Links[] = [
    { name: 'Habilidades', link: 1 },
    { name: 'Intereses', link: 2 },
    { name: 'Otros', link: 3 }
  ];

  ngOnInit() { 
    this.showInfo(1); 
  }

  showInfo( info: number | string ) {
    if ( info === 1 ) {
      this.image = '../../../assets/img/skills.png';
      this.information = 'Habilidades';
      this.description = 1;
      this.shortDescription = 'una frase aqui, la primera, algo muy corto porfavor, no se que aun pero aja. aaaaaaaaaaaaaaaaaaaaaaaaaaa fd f rgt tgr yty hty hj yu j it kj uik  lk  l p lo  ku hb t thgythbthb yhju juy j iu k ku km  hy yt ht nh.';
    }
    else if ( info === 2 ) {
      this.image = '../../../assets/img/interests.png';
      this.information = 'Intereses';
      this.description = 2;
      this.shortDescription = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat minima, corrupti voluptas sit similique auterror quae ea suscipit laborum atque quo vero perspiciatis ut voluptates perferendis minus odit nihil.';
    }
    else if ( info === 3 ) {
      this.image = '../../../assets/img/aryan-dhiman-iGLLtLINSkw-unsplash.jpg';
      this.information = 'Otros';
      this.description = 3;
      this.shortDescription = 'una frase aqui, la primera ddddddddds sssssssssssssssr kjibbufd gfbgfhbhbhnnh u hb t thgythbthb yhju juy j iu k ku km sdshfuieraf ehreurhfgfbv ytutjuujy hy yt ht nhhhhhhhhhhhhhhghghytyjjynuimhhhhhhhhhhhhhhhhhhhhh.';
    }
  }

}
