import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resena-inv',
  templateUrl: './resena-inv.page.html',
  styleUrls: ['./resena-inv.page.scss'],
})
export class ResenaInvPage implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }
  home_inv(){
    console.log("Home");
    this.route.navigate(["/home-inv"]);
  }
}
