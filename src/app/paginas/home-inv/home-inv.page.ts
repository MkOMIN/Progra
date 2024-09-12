import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-inv',
  templateUrl: './home-inv.page.html',
  styleUrls: ['./home-inv.page.scss'],
})
export class HomeInvPage implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
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
  cuenta_inv(){
    console.log("Cuenta");
    this.route.navigate(["/cuenta-inv"]);
  }
  resena_inv(){
    console.log("Reseña");
    this.route.navigate(["/resena-inv"]);
  }
}
