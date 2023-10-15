import { MenuBarRoutingModule } from './menu-bar-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuBarComponent } from './menu-bar.component';


@NgModule({
  declarations: [
    MenuBarComponent
  ],
  imports: [
    CommonModule,
    MenuBarRoutingModule
  ],
  exports:[
    MenuBarComponent
  ]
})
export class MenuBarModule { }
