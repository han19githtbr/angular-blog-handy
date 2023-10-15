import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BigCardComponent } from './big-card.component';
import { BigCardRoutingModule } from './big-card-routing.module';

@NgModule({
  declarations: [
    BigCardComponent
  ],
  imports: [
    CommonModule,
    BigCardRoutingModule
  ],
  exports:[
    BigCardComponent
  ],
})
export class BigCardModule { }
