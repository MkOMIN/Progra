import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.page.html',
  styleUrls: ['./crear.page.scss'],
})


export class CrearPage implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }

  home(){
    console.log("Home");
    this.route.navigate(["/home"]);
  }
}
