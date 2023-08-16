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
              routerLink: "/",
            //   icon: 'pi pi-fw pi-building'
          },
          {
            label: 'Ventajas',
            routerLink: "/",
            // icon: 'pi pi-fw pi-star'
        },
        {
            label: 'Catálogo',
            items: [
              {
                  label: 'Completo 2023',  
                  routerLink: "/catalogo",
              },
              {
                  label: 'Gift 2023',  
                  routerLink: "/gift",
              },
              {
                  label: 'Promocionales 2023',
                  routerLink: "/promocionales",
              },
              {
                  label: 'Textil 2023',
                  routerLink: "/textil",
              }
          ]
        },
        {
            label: 'Servicios',
            routerLink: "/",
            // icon: 'pi pi-fw pi-check'
        },
        {
            label: 'Contacto',
            routerLink: "/",
            // icon: 'pi pi-fw pi-envelope'
        },
      ];
  }

}
