import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.page.html',
  styleUrls: ['./cuenta.page.scss'],
})

export class CuentaPage implements OnInit {

  nombre: string = '';
  usuario: string = ''; // Inicializamos con una cadena vacía
  telefono: string = '';

  constructor(private route: Router) { }

  ngOnInit() {
    // Verificar si el email existe en localStorage
    this.nombre = localStorage.getItem('nombre') || '';
    const email = localStorage.getItem('email');
    this.telefono = localStorage.getItem('telefono') || '';

    if (email) {
      // Si el email existe, asignarlo a la variable usuario
      this.usuario = email;
    } else {
      // Si no hay email, puedes redirigir al login o manejar el error
      console.log('No se encontró el email, redirigiendo a la página de login.');
      this.route.navigate(['/login']);
    }
  }

  home() {
    console.log("Home");
    this.route.navigate(["/home"]);
  }

  login() {
    console.log("Login");
    this.route.navigate(["/login"]);
  }
}
