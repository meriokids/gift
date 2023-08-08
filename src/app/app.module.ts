import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimengModule } from './primeng/primeng.module';
import { CoreuiModule } from './coreui/coreui.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



import { SharedModule } from './shared/shared.module';
import { SliderComponent } from './components/slider/slider.component';
import { ProductService } from './services/product.service';
import { AboutComponent } from './containers/about/about.component';
import { AdvantagesComponent } from './containers/advantages/advantages.component';
import { OurserviceComponent } from './containers/ourservice/ourservice.component';
import { ContactComponent } from './containers/contact/contact.component';
import { ParallaxComponent } from './components/parallax/parallax.component';
import { SlideruiComponent } from './components/sliderui/sliderui.component';
import { SubjectService } from './services/subject.service';
import { Parallax2Component } from './components/parallax2/parallax2.component';





@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    AboutComponent,
    AdvantagesComponent,
    OurserviceComponent,
    ContactComponent,
    ParallaxComponent,
    SlideruiComponent,
    Parallax2Component,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrimengModule,
    CoreuiModule,
    SharedModule,
    BrowserAnimationsModule,
    FontAwesomeModule
   
  ],
  providers: [ 
    ProductService,
    SubjectService
   ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }