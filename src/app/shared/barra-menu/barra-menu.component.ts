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
              fragment: "about" 
            //   icon: 'pi pi-fw pi-building'
          },
          {
            label: 'Ventajas',
            routerLink: "/",
            fragment: "advantages"
            // icon: 'pi pi-fw pi-star'
        },
        {
            label: 'Catálogo',
            items: [
              {
                  label: 'Completo 2026',  
                  routerLink: "/catalogo",
              },
              {
                  label: 'Gift 2026',  
                  routerLink: "/gift",
              },
              {
                  label: 'Promocionales 2026',
                  routerLink: "/promocionales",
              },
              {
                  label: 'Textil 2026',
                  routerLink: "/textil",
              }
          ]
        },
        {
            label: 'Servicios',
            routerLink: "/",
            fragment: "ourservice"
            // icon: 'pi pi-fw pi-check'
        },
        {
            label: 'Contacto',
            routerLink: "/",
            fragment: "contact" 
            // icon: 'pi pi-fw pi-envelope'
        },
      ];
  }

}
