import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.page.html',
  styleUrls: ['./crear.page.scss'],
})
export class CrearPage implements OnInit {

  producto: string = "";
  ingredientes: string = "";
  opinion: string = "";

  constructor(private route: Router) { }

  ngOnInit() {}

  enviar() {
    if (this.producto && this.ingredientes) {
      console.log("Reseña Enviada");
      localStorage.setItem("producto", this.producto);
      localStorage.setItem("ingredientes", this.ingredientes);
      localStorage.setItem("opinion", this.opinion);
      this.route.navigate(["/home"]);
    } else {
      console.log("Formulario inválido.");
    }
  }

  home() {
    console.log("Home");
    this.route.navigate(["/home"]);
  }
}
