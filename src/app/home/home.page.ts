import { Component } from '@angular/core';
import { Router } from '@angular/router';
import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
import { Geolocation } from '@capacitor/geolocation';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  public map!: mapboxgl.Map;
  public style = 'mapbox://styles/mapbox/streets-v11';
  
  
  async obtenerUbicacion() {
    const coordenadas = await Geolocation.getCurrentPosition();
    console.log('Latitud:',coordenadas.coords.latitude, 'Longitud:', coordenadas.coords.longitude);
  }
  
  constructor(private route:Router) {
    mapboxgl.accessToken = environment.MAPBOX_KEY
    this.obtenerUbicacion()
    }

  ngoOnInit() {
    this.buildMap();
  }
  ionViewWillEnter() {
    if (!this.map) {
      this.buildMap();
    }
  }
    buildMap() {
      mapboxgl.accessToken = 'pk.eyJ1IjoibWtvbWluLTkzIiwiYSI6ImNtMmtra2twNzAyYTUyam40MHJ4ZWxndXMifQ.XUUZ8mOqe4ylOSoFvKZDHQ';
      this.map = new mapboxgl.Map({
        container: 'mapa-box',
        style: this.style,
        zoom: 14,
        center: [-71.2431549, -32.8883092],
        dragPan: true,  // Permitir arrastrar el mapa
        scrollZoom: true,  // Permitir hacer zoom con la rueda del ratón
        boxZoom: true,  // Permitir hacer zoom con la caja
        doubleClickZoom: true,  // Permitir hacer zoom con doble clic
        touchZoomRotate: true,  // Permitir el zoom y rotación táctil
        dragRotate: true  // Permitir rotar el mapa con el mouse
      });
      this.map.resize();
    }

    

    home(){
      console.log("Home");
      this.route.navigate(["/home"]);
    }
    cuenta(){
      console.log("Cuenta");
      this.route.navigate(["/cuenta"]);
    }
    
    resena(){
      console.log("Reseña");
      this.route.navigate(["/resena"]);
    }
    
    crear(){
      console.log("Crear");
      this.route.navigate(["/crear"]);
    }
}
