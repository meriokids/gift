import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as Notiflix from 'notiflix';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  // value: string | undefined;

  // message: string | undefined;

  // nodes!: any[];

  //   selectedNodes: any;

  //   constructor(private nodeService: SubjectService) {
  //       this.nodeService.getFiles().then((files) => (this.nodes = files));
  //   }

  datos:FormGroup;

  constructor(private httpclient:HttpClient){
    this.datos = new FormGroup(
      {
        nombre: new FormControl('',Validators.required),
        empresa: new FormControl('',Validators.required),
        correo: new FormControl('',[Validators.required,Validators.email]),
        mensaje: new FormControl('',Validators.required),
    })
  }


  envioCorreo(){
    Notiflix.Loading.standard('Cargando..');
    let params = {
      name:this.datos.value.nombre,
      empresa:this.datos.value.empresa,
      correo:this.datos.value.correo,
      message:this.datos.value.mensaje,
      
    }
    console.log(params)
      this.httpclient.post('https://backend-gift-0k3h.onrender.com/envio',params).subscribe(resp=>{
        console.log(resp)
        Notiflix.Loading.remove();
        Notiflix.Notify.success('Enviado Correctamente');
        this.datos.reset();
      })
  }

}

Notiflix.Notify.init({
  width: '300px',
  position: 'right-bottom',
  closeButton: false,
  });
