import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  private isAuthenticated = false;
  public user: any = {};
  private collection = 'Avaliador';

  constructor(
    private router: Router,
    private firestore: AngularFirestore
  ) { }

  canActivate(): boolean {
    if (!this.isAuthenticated) {
      this.router.navigate(['/login']);
      return false;
    }
    return this.isAuthenticated;
  }

  setAuthenticated(authenticated: boolean) {
    this.isAuthenticated = authenticated;
  }

  logar(dados: any): Observable<any> {
    return this.firestore.collection(this.collection, ref => ref.where('email', '==', dados.email).where('senha', '==', dados.senha))
      .valueChanges();
  }
}
