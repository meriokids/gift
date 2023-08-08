import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from '../primeng/primeng.module';
import { BarraMenuComponent } from './barra-menu/barra-menu.component';




@NgModule({
  declarations: [
    BarraMenuComponent
  ],
  imports: [
    CommonModule,
    PrimengModule
  ],
  exports: [
    BarraMenuComponent
  ],
})
export class SharedModule { }
