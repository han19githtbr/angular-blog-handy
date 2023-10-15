import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmallCardComponent } from './small-card.component';
import { SmallCardRoutingModule } from './small-card-routing.module';

@NgModule({
  declarations: [
    SmallCardComponent
  ],
  imports: [
    CommonModule,
    SmallCardRoutingModule
  ],
  exports:[
    SmallCardComponent
  ],
})
export class SmallCardModule { }
