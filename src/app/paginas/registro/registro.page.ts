import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  nombre: string = "";
  usuario: string = "";
  password: string = "";
  telefono: string = "";

  constructor(public mensaje: ToastController, private route: Router, public alerta: AlertController) { }

  async mensajeExito() {
    const toast = await this.mensaje.create({
      message: 'Registro de Usuario exitoso',
      duration: 2000
    });
    toast.present();
  }

  async MensajeError() {
    const alert = await this.alerta.create({
      header: 'Error',
      subHeader: 'Falta Rellenar algun campo',
      message: 'Rellene el campo faltante y vuelva a intentar',
      buttons: ['Aceptar']
    });

    await alert.present();
  }

  registrarse() {
    if (this.nombre === "" && this.usuario === "" && this.password === "" && this.telefono==="") { // Cambiado && por ||
      console.log("No pueden estar los campos vacíos");
      this.MensajeError();
    } else {
      console.log("Inicio exitoso");
      this.mensajeExito();
      this.route.navigate(["/home"]);
    }
  }
  login(){
    this.route.navigate(["/login"]);
  }
  ngOnInit() {
  }
}
