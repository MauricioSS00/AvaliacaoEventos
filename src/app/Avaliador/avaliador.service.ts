import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { Avaliador } from './avaliador.model';

@Injectable({
  providedIn: 'root'
})
export class AvaliadorService {

  private collection = 'Avaliador';

  constructor(
    private firestore: AngularFirestore
  ) { }

  listarAvaliador(): Observable<Avaliador[]> {
    return this.firestore.collection(this.collection).valueChanges();
  }

  listarAvaliadorEvento(): Observable<Avaliador[]> {
    return this.firestore.collection(this.collection, ref => ref.where('tipo', '==', 1)).valueChanges();
  }

  incluirAvaliador(avaliador: Avaliador) {
    if (!avaliador.id) {
      avaliador.id = this.firestore.createId();
    }
    this.firestore.collection(this.collection).doc(avaliador.id).set(avaliador);
  }

  async removerAvaliador(id: string) {
    this.firestore.collection(this.collection).doc(id).delete();
  }
}
