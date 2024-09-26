import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resena',
  templateUrl: './resena.page.html',
  styleUrls: ['./resena.page.scss'],
})
export class ResenaPage implements OnInit {
  
  producto: string = "";
  ingredientes: string = "";
  opinion: string = "";
  nombre: string = "";
  usuario: string = "";
  
  constructor(private route:Router) { }

  ngOnInit() {
    this.producto = localStorage.getItem("producto") || "";
    this.ingredientes = localStorage.getItem("ingredientes") || "";
    this.opinion = localStorage.getItem("opinion") || "";
    this.nombre = localStorage.getItem("nombre") || "";
    const email = localStorage.getItem('email');
    if (email) {
      // Si el email existe, asignarlo a la variable usuario
      this.usuario = email;
    } else {
      // Si no hay email, puedes redirigir al login o manejar el error
      console.log('No se encontró el email, redirigiendo a la página de login.');
      this.route.navigate(['/login']);
    }
  }

  home(){
    console.log("Home");
    this.route.navigate(["/home"]);
  }
}
