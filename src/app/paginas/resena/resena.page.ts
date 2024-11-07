import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImageService } from 'src/app/servicios/image.service';


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
  foto: string = "";
  imageUrl: string | null = null;

  constructor(private route:Router, private imageService: ImageService) { }

  ngOnInit() {
    this.producto = localStorage.getItem("producto") || "";
    this.ingredientes = localStorage.getItem("ingredientes") || "";
    this.opinion = localStorage.getItem("opinion") || "";
    this.nombre = localStorage.getItem("nombre") || "";
    const email = localStorage.getItem('email');
    this.imageUrl = this.imageService.getImage(); // Obtiene la imagen desde el servicio
  }

  home(){
    console.log("Home");
    this.route.navigate(["/home"]);
  }
}
