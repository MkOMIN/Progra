import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/servicios/image.service';
import { Router } from '@angular/router';
import {Camera ,CameraResultType, CameraSource} from '@capacitor/camera';
import {defineCustomElements} from '@ionic/pwa-elements/loader';


@Component({
  selector: 'app-crear',
  templateUrl: './crear.page.html',
  styleUrls: ['./crear.page.scss'],
})
export class CrearPage implements OnInit {

  producto: string = "";
  ingredientes: string = "";
  opinion: string = "";
  selectedPhoto: File | null = null;;


  async takePhoto() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Uri
    });

  const response = await fetch(image.webPath!);
    const blob = await response.blob();
    this.selectedPhoto = new File([blob], 'photo.jpg', { type: blob.type });
    console.log('Foto capturada:', this.selectedPhoto);
  }

  async tomarFoto(){
    const image = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });
    console.log(image.webPath)
  }

  constructor(private route: Router, private imageService: ImageService) { }

  onFileSelected(event: Event): void {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files[0]) {
      const file = fileInput.files[0];
      const imageUrl = URL.createObjectURL(file);
      this.imageService.setImage(imageUrl); // Guarda la imagen en el servicio
    }
  }

  ngOnInit() {}

  enviar() {
    if (this.producto && this.ingredientes) {
      console.log("Reseña Enviada");
      localStorage.setItem("producto", this.producto);
      localStorage.setItem("ingredientes", this.ingredientes);
      localStorage.setItem("opinion", this.opinion);
      localStorage.setItem("foto", "https://www.istockphoto.com/photo/food-background-gm1150670009-311413292");
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
