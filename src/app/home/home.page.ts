import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

    constructor(private route:Router) {}
    cuenta(){
      console.log("Cuenta");
      this.route.navigate(["/cuenta"]);
    }
}
