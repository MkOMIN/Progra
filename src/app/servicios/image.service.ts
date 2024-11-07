import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private imageUrl: string | null = null;

 // Método para establecer la URL de la imagen
 setImage(url: string) {
  this.imageUrl = url;
}

// Método para obtener la URL de la imagen
getImage(): string | null {
  return this.imageUrl;
}
}