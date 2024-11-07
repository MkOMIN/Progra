import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.page.html',
  styleUrls: ['./cuenta.page.scss'],
})

export class CuentaPage implements OnInit {

  nombre: string = '';
  usuario: string = '';
  telefono: string = '';

  constructor(private route: Router, private storage:Storage, private afAuth:AngularFireAuth, private firestore:AngularFirestore) { }

  async ngOnInit() {
    const storage = await this.storage.create();
    this.usuario = await storage.get('email');
    this.nombre = await storage.get('nombre');
    this.telefono = await storage.get('telefono');
  }

  async update(){
    const storage = await this.storage.create();
    await storage.set('nombre', this.nombre);
    await storage.set('telefono', this.telefono);
    this.firestore.doc('users/${this.afAuth.currentUser?.uid}').update({
      nombre: this.nombre,
      telefono: this.telefono
    });
  }

  home() {
    console.log("Home");
    this.route.navigate(["/home"]);
  }

  login() {
    this.storage.clear();
    console.log("Login");
    this.route.navigate(["/login"]);
  }
  
  logout(){
    this.storage.clear();
    return this.afAuth.signOut().then(()=>{
      this.route.navigate(['/login']);
    });
  }

}
