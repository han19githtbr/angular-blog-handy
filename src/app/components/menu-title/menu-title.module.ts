import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuTitleComponent } from './menu-title.component';
import { MenuTitleRoutingModule } from './menu-title-routing.module';

@NgModule({
  declarations: [
    MenuTitleComponent
  ],
  imports: [
    CommonModule,
    MenuTitleRoutingModule
  ],
  exports:[
    MenuTitleComponent
  ],
})
export class MenuTitleModule { }
