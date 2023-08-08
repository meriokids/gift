import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-barra-menu',
  templateUrl: './barra-menu.component.html',
  styleUrls: ['./barra-menu.component.scss']
})
export class BarraMenuComponent  implements OnInit {
  
    items: MenuItem[] | undefined;

  ngOnInit() {
      this.items = [
          {
              label: 'Nosotros',
            //   icon: 'pi pi-fw pi-building'
          },
          {
            label: 'Ventajas',
            // icon: 'pi pi-fw pi-star'
        },
        {
            label: 'Catálogo',
            // icon: 'pi pi-fw pi-book'
        },
        {
            label: 'Servicios',
            // icon: 'pi pi-fw pi-check'
        },
        {
            label: 'Contacto',
            // icon: 'pi pi-fw pi-envelope'
        },
      ];
  }

}
