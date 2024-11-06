import { Component } from '@angular/core';
import { Router } from '@angular/router';
import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
import { Geolocation } from '@capacitor/geolocation';


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
      this.obtenerUbicacion()
    }
    ionViewWillEnter() {
      if (!this.map) {
        this.buildMap();
      }
    }
    
    buildMap() {
      mapboxgl.accessToken = 'pk.eyJ1IjoibWtvbWluLTkzIiwiYSI6ImNtMmtsZ3JhdjAya3UybW42aWU1Mm1zdzcifQ.9_DDTzXFPrT1N_TBCmnPZA';
      
      this.map = new mapboxgl.Map({
        container: 'mapa-box',
        style: this.style,
        zoom: 14,
        center: [-71.461371, -33.0445992]
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
