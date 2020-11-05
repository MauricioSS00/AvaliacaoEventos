import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AvaliadorService {

  avaliadores: Observable<any[]>;

  constructor(firestore: AngularFirestore) {
    this.avaliadores = firestore.collection('avaliador').valueChanges();
    console.log(this.avaliadores);
  }
}
