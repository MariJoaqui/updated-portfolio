import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { MaterialModule } from '../material/material.module';

// Components
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SideNavComponent } from './side-nav/side-nav.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SideNavComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SideNavComponent
  ]
})
export class SharedModule { }
