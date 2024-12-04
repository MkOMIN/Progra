import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import {map} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserControllerService {

  constructor(private firestore:AngularFirestore) { }

  ObtenerDatos(username: String): Observable<any>{
    return this.firestore.collection('users', ref => ref.where('email', '==',username)).snapshotChanges().pipe(
      map(actions =>{ 
        return actions.map(action => {
          const data = action.payload.doc.data();
          const id = action.payload.doc.id;
          return {id,data};
        })
      }
      )
    )



  }
}
