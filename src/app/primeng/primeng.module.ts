import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenubarModule } from 'primeng/menubar';
import { CarouselModule } from 'primeng/carousel';
import { CardModule } from 'primeng/card';
import { ImageModule } from 'primeng/image';
import { FormsModule } from '@angular/forms';
import { TreeSelectModule } from 'primeng/treeselect';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TabMenuModule } from 'primeng/tabmenu';
import { TabViewModule } from 'primeng/tabview';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MenubarModule,
    CarouselModule,
    CardModule,
    ImageModule,
    FormsModule,
    InputTextModule,
    TreeSelectModule,
    InputTextareaModule,
    TabMenuModule,
    TabViewModule,
  ],
  exports: [
    MenubarModule,
    CarouselModule,
    CardModule,
    ImageModule,
    FormsModule,
    InputTextModule,
    TreeSelectModule,
    InputTextareaModule,
    TabMenuModule,
    TabViewModule
  ]
})
export class PrimengModule { }
