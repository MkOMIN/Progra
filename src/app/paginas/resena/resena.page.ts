import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resena',
  templateUrl: './resena.page.html',
  styleUrls: ['./resena.page.scss'],
})
export class ResenaPage implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }

  home(){
    console.log("Home");
    this.route.navigate(["/home"]);
  }
}
