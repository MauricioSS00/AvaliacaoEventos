import { EventEmitter, Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { Evento } from './evento.model';

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  static criteriosAvaliacao = new EventEmitter();
  private collection = 'Evento';

  constructor(
    private firestore: AngularFirestore
  ) { }

  listarEventoId(idEvento: string): Observable<Evento[]> {
    return this.firestore.collection(this.collection, ref => ref.where('id', '==', idEvento)).valueChanges();
  }

  listarEvento(): Observable<Evento[]> {
    return this.firestore.collection(this.collection).valueChanges();
  }

  incluirEvento(evento: Evento) {
    if (!evento.id) {
      evento.id = this.firestore.createId();
    }
    this.firestore.collection(this.collection).doc(evento.id).set(evento);
  }

  removerEvento(id: string) {
    this.firestore.collection(this.collection).doc(id).delete();
  }

  atualizarEvento(evento: Evento) {
    this.firestore.collection(this.collection).doc(evento.id).update(evento);
  }
}
