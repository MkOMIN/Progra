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

  ngOnInit() {}

  // Valida que el email tenga @ y .
  validarEmail(email: string): boolean {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

  // Valida que el teléfono tenga exactamente 9 dígitos y solo contenga números
  validarTelefono(telefono: string): boolean {
    const telefonoPattern = /^[0-9]{9}$/;
    return telefonoPattern.test(telefono);
  }

  // Valida que la contraseña tenga al menos 5 caracteres
  validarPassword(password: string): boolean {
    return password.length >= 5;
  }

  async mensajeExito() {
    const toast = await this.mensaje.create({
      message: 'Registro de Usuario exitoso',
      duration: 2000
    });
    toast.present();
  }

  async MensajeError(mensaje: string) {
    const alert = await this.alerta.create({
      header: 'Error',
      subHeader: 'Error en el registro',
      message: mensaje,
      buttons: ['Aceptar']
    });
    await alert.present();
  }

  registrarse() {
    if (this.nombre === "" || this.usuario === "" || this.password === "" || this.telefono === "") {
      // Muestra mensaje si algún campo está vacío
      console.log("No pueden estar los campos vacíos");
      this.MensajeError('Por favor, complete todos los campos.');
    } else if (!this.validarEmail(this.usuario)) {
      // Verifica que el correo sea válido
      console.log("Correo electrónico no válido");
      this.MensajeError('Por favor, ingrese un correo electrónico válido.');
    } else if (!this.validarTelefono(this.telefono)) {
      // Verifica que el teléfono tenga 9 dígitos y no contenga letras
      console.log("Teléfono no válido");
      this.MensajeError('El teléfono debe contener exactamente 9 dígitos numéricos.');
    } else if (!this.validarPassword(this.password)) {
      // Verifica que la contraseña tenga al menos 5 caracteres
      console.log("Contraseña demasiado corta");
      this.MensajeError('La contraseña debe tener al menos 5 caracteres.');
    } else {
      // Si todo está correcto, se registra el usuario
      console.log("Registro exitoso");
      this.mensajeExito();
      this.route.navigate(["/home"]);
    }
  }

  login() {
    this.route.navigate(["/login"]);
  }
}
