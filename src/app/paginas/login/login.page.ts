import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

import { Storage } from '@ionic/storage-angular';
import { FirebaseLoginService } from 'src/app/servicios/firebase-login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario: string = "";
  password: string = "";
  isModalOpen = false;

  constructor(public mensaje: ToastController, private route: Router, public alerta: AlertController, private storage: Storage, private loginFireBase:FirebaseLoginService) { }
  
  async ngOnInit() {
    const storage = await this.storage.create();
  }

  // Valida que el email tenga @ y .
  validarEmail(email: string): boolean {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

  // Valida que la contraseña tenga al menos 5 caracteres
  validarPassword(password: string): boolean {
    return password.length >= 5;
  }
  
  async mensajeExito() {
    const toast = await this.mensaje.create({
      message: 'Inicio de sesión exitoso',
      duration: 2000
    });
    toast.present();
  }

  async MensajeError(mensaje: string) {
    const alert = await this.alerta.create({
      header: 'Error',
      subHeader: 'Error en el inicio de sesión',
      message: mensaje,
      buttons: ['Aceptar']
    });
    await alert.present();
  }

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  ingresar() {
    if (this.usuario === "" || this.password === "") {
      console.log("No pueden estar los campos vacíos");
      this.MensajeError('Por favor, complete todos los campos.');
    } else if (!this.validarEmail(this.usuario)) {
      console.log("Correo electrónico no válido");
      this.MensajeError('Por favor, ingrese un correo electrónico válido.');
    } else if (!this.validarPassword(this.password)) {
      console.log("Contraseña demasiado corta");
      this.MensajeError('La contraseña debe tener al menos 5 caracteres.');
    } else {
      this.loginFireBase.login(this.usuario, this.password).then(()=>{
        console.log("Inicio exitoso");
        this.mensajeExito();
        this.storage.set('email', this.usuario);
        this.storage.set('password', this.password);
        this.route.navigate(["/home"]);
      });
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
