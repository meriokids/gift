import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogoComponent } from './containers/catalogo/catalogo.component';
import { OnepageComponent } from './containers/onepage/onepage.component';
import { GiftComponent } from './containers/catalogo/gift/gift.component';
import { PromocionalesComponent } from './containers/catalogo/promocionales/promocionales.component';
import { TextilComponent } from './containers/catalogo/textil/textil.component';
import { AboutComponent } from './containers/about/about.component';

const routes: Routes = [

  { path: 'catalogo', component: CatalogoComponent },
  { path: 'gift', component: GiftComponent },
  { path: 'promocionales', component: PromocionalesComponent },
  { path: 'nosotros', component: AboutComponent },
  { path: 'textil', component:TextilComponent },
  { path: '', component: OnepageComponent },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload',
    anchorScrolling: 'enabled',
    enableTracing: false
  })],


  
  exports: [RouterModule]
})
export class AppRoutingModule { }
