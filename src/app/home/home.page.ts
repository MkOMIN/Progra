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
    mapboxgl.accessToken = environment.MAPBOX_KEY,
    this.obtenerUbicacion()
    }

  ngoOnInit() {

  }
  ionViewWillEnter() {
    if (!this.map) {
      this.buildMap();
    }
  }
    async buildMap() {
      const coordenadas = Geolocation.getCurrentPosition();
      mapboxgl.accessToken = 'pk.eyJ1IjoibWtvbWluLTkzIiwiYSI6ImNtMmtra2twNzAyYTUyam40MHJ4ZWxndXMifQ.XUUZ8mOqe4ylOSoFvKZDHQ';
      
      this.map = new mapboxgl.Map({
        container: 'mapa-box',
        // Usando un estilo que muestra mejor los edificios 3D
        style: 'mapbox://styles/mapbox/navigation-night-v1',
        zoom: 16, // Zoom más cercano para mejor vista 3D
        center: [(await coordenadas).coords.longitude, (await coordenadas).coords.latitude],
        pitch: 60, // Inclinación de la cámara (0-85 grados)
        bearing: 45, // Rotación del mapa
        antialias: true, // Mejora la calidad visual
        dragPan: true,
        scrollZoom: true,
        boxZoom: true,
        doubleClickZoom: true,
        touchZoomRotate: true,
        dragRotate: true
      });

      // Esperar a que el mapa cargue
      this.map.on('load', () => {
        // Añadir capa 3D de edificios
        this.map.addLayer({
          'id': '3d-buildings',
          'source': 'composite',
          'source-layer': 'building',
          'filter': ['==', 'extrude', 'true'],
          'type': 'fill-extrusion',
          'minzoom': 15,
          'paint': {
            'fill-extrusion-color': '#aaa',
            'fill-extrusion-height': [
              'interpolate',
              ['linear'],
              ['zoom'],
              15,
              0,
              15.05,
              ['get', 'height']
            ],
            'fill-extrusion-base': [
              'interpolate',
              ['linear'],
              ['zoom'],
              15,
              0,
              15.05,
              ['get', 'min_height']
            ],
            'fill-extrusion-opacity': 0.6
          }
        });
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
