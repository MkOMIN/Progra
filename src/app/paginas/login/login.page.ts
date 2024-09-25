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
      // Muestra un mensaje si los campos están vacíos
      console.log("No pueden estar los campos vacíos");
      this.MensajeError('Por favor, complete todos los campos.');
    } else if (!this.validarEmail(this.usuario)) {
      // Verifica que el email sea válido
      console.log("Correo electrónico no válido");
      this.MensajeError('Por favor, ingrese un correo electrónico válido.');
    } else if (!this.validarPassword(this.password)) {
      // Verifica que la contraseña tenga al menos 5 caracteres
      console.log("Contraseña demasiado corta");
      this.MensajeError('La contraseña debe tener al menos 5 caracteres.');
    } else {
      // Si todo está bien, inicia sesión
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
