import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.page.html',
  styleUrls: ['./crear.page.scss'],
})


export class CrearPage implements OnInit {

  producto: string = "";
  ingredientes: string = "";


  constructor(private route:Router) { }

  ngOnInit() {
  }

  enviar(){
    console.log("Reseña Enviada");
    localStorage.setItem("producto", this.producto);
    this.route.navigate(["/home"]);
  }

  home(){
    console.log("Home");
    this.route.navigate(["/home"]);
  }
}
