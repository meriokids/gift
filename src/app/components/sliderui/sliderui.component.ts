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
 
  slides: any[] = [];

  constructor() { }


  ngOnInit(): void {
    this.slides = [
      {
        id: 0,
        src: './assets/images/slide-stand.png',
        bg: '',
        title: 'STAND',
        subtitle: '',
        button: '',
        href: '/catalogo',
        target: '_self'
      },
      {
        id: 1,
        src: './assets/images/slide-catering.png',
        bg: './assets/images/slide-catering-bg.jpg',
        title: 'CATERING',
        imageClass: 'hero-image hero-image--catering',
        mediaClass: 'hero-media hero-media--bottom',
        shellClass: 'hero-shell hero-shell--catering',
        subtitle: '',
        button: '',
        href: '/catalogo',
        target: '_self'
      },
      {
        id: 2,
        src: './assets/images/slide-textil.png',
        bg: '',
        bgColor: '#c3c3c3',
        title: 'TEXTIL',
        subtitle: '',
        button: '',
        href: '/catalogo',
        target: '_self'
      },
      {
        id: 3,
        src: './assets/images/slide-promos.png',
        bg: './assets/images/slide-promos-bg.jpg',
        title: 'PROMOCIONALES',
        imageClass: 'hero-image hero-image--promos',
        mediaClass: 'hero-media hero-media--bottom',
        copyClass: 'hero-copy hero-copy--promos',
        titleClass: 'hero-title hero-title--promos',
        shellClass: 'hero-shell hero-shell--promos',
        subtitle: '',
        button: '',
        href: '/catalogo',
        target: '_self'
      }
    ];
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
