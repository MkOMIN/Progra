import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  nombre: string = "";
  usuario: string = "";
  password: string = "";
  isModalOpen = false;

  constructor(public mensaje: ToastController, private route: Router, public alerta: AlertController) { }
  
  ngOnInit() {
  }
  
  async mensajeExito() {
    const toast = await this.mensaje.create({
      message: 'Inicio de sesión exitoso',
      duration: 2000
    });
    toast.present();
  }

  async MensajeError() {
    const alert = await this.alerta.create({
      header: 'Error',
      subHeader: 'Error en el inicio de sesión',
      message: 'El inicio de sesión falló',
      buttons: ['Aceptar']
    });

    await alert.present();
  }

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  ingresar() {
    if (this.usuario === "" || this.password === "") { // Cambiado && por ||
      console.log("No pueden estar los campos vacíos");
      this.MensajeError();
    } else {
      console.log("Inicio exitoso");
      this.mensajeExito();
      this.route.navigate(["/home"]);
    }
  }
  
  registrarse(){
    console.log("Registro");
    this.route.navigate(["/registro"]);
  }
  
  invitado(){
    console.log("Invitado");
    this.route.navigate(["/home-inv"]);
  }
}
