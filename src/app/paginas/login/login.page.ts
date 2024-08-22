import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  nombre:string = ""
  usuarios:string = ""
  password:string = ""

  constructor(public mensaje:ToastController, private route:Router, public alerta:AlertController) { }

  async mensajeExito() {
    const toast = await this.mensaje.create({
      message: 'Inicio de sesion Exitoso ',
      duration: 2000
    });
    toast.present();
  }

  async MensajeError() {
    const alert = await this.alerta.create({
      header: 'Error',
      subHeader: 'Error de inicio de sesion',
      message: 'El inicio de sesion fallo',
      buttons: ['Aceptar']
    });
  
    await alert.present();
  }

  ingresar(){
    if(this.usuarios=== "" && this.password=== ""){
      console.log("No pueden estar los campos vacios")
      this.MensajeError()
    }
    else{
      console.log("inicio Exitoso")
      this.mensajeExito()
      this.route.navigate(["/home"])
    }
    
  }

  ngOnInit() {
  }

}
