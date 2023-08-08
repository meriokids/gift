import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselModule } from '@coreui/angular';



@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    CarouselModule,
  ],
  exports: [
    CarouselModule,
  ]
})
export class CoreuiModule { }

