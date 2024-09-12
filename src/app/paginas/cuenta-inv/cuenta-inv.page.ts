import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cuenta-inv',
  templateUrl: './cuenta-inv.page.html',
  styleUrls: ['./cuenta-inv.page.scss'],
})
export class CuentaInvPage implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }
  home(){
    console.log("Home");
    this.route.navigate(["/home"]);
  }
<<<<<<< HEAD
  home_inv(){
    console.log("Home");
    this.route.navigate(["/home-inv"]);
  }
  registro(){
    console.log("Registro");
    this.route.navigate(["/registro"]);
  }
=======
  
>>>>>>> ccae36468eeed0405e468541ebf1ce22db39bc93
}
