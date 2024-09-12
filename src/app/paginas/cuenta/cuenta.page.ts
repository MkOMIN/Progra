import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.page.html',
  styleUrls: ['./cuenta.page.scss'],
})
export class CuentaPage implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }
  home(){
    console.log("Home");
    this.route.navigate(["/home"]);
  }
  login(){
    console.log("Login");
    this.route.navigate(["/login"]);
  }
}
