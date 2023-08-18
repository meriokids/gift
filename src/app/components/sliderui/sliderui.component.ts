import { Component, OnInit} from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-sliderui',
  templateUrl: './sliderui.component.html',
  styleUrls: ['./sliderui.component.scss']
})
export class SlideruiComponent implements OnInit {

   //Dialog
   visible: boolean = false;
   showDialog() {
     this.visible = true;
   }
 

   


  slides: any[] = new Array(1).fill({id: -1, src: '', title: '', subtitle: '', image:'', button:''});

  constructor() { }


  ngOnInit(): void {
    this.slides[0] = {
      id: 0,
      src: './assets/images/slide-01.jpg',
      title: 'Termos y Cilindros con tu Marca',
      subtitle: 'Personalizados con tu maraca',
      image:'./assets/images/slide-01-A.png',
      button:'Consulta nuestro Catálogo',
      href: '/catalogo',
      target: '_self'
    };
    this.slides[1] = {
      id: 1,
      src: './assets/images/slide-02.jpg',
      title: 'Regalos y Kits Empresariales ',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image:'./assets/images/slide-02-A.png',
      button:'Pide una cotización',
      href:'#contact',
      target: '_self'
    }
    this.slides[2] = {
      id: 2,
      src: './assets/images/slide-03.jpg',
      title: 'Productos para Premiaciones y Kits de Carrera',
      subtitle: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
      image:'./assets/images/slide-03-A.png',
      button:'Envíanos un Mensaje',
      href:'https://wa.me/525515711872',
      target: '_blank'
    }

  }

 

}

@Pipe({
  name: 'safeUrl'
})
export class SafeUrlPipe implements PipeTransform {

  constructor(private domSanitizer: DomSanitizer) {}
  transform(value: any, args?: any): any {
    return this.domSanitizer.bypassSecurityTrustUrl(value);
  }
}

