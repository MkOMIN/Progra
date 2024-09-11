import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

    constructor(private route:Router) {}
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
