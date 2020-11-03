import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-participante',
  templateUrl: 'participante.page.html',
  styleUrls: ['participante.page.scss'],
})
export class ParticipantePage {

  participante: any;
  participantes: any[] = [
    { nome: 'Opa 1', curso: '26/10/2020' },
    { nome: 'Opa 2', curso: '26/10/2020' },
    { nome: 'Opa 3', curso: '26/10/2020' },
    { nome: 'Opa 4', curso: '26/10/2020' },
    { nome: 'Opa 5', curso: '26/10/2020' },
    { nome: 'Opa 6', curso: '26/10/2020' },
    { nome: 'Opa 7', curso: '26/10/2020' },
    { nome: 'Opa 8', curso: '26/10/2020' },
    { nome: 'Opa 9', curso: '26/10/2020' },
    { nome: 'Opa 10', curso: '26/10/2020' },
    { nome: 'Opa 11', curso: '26/10/2020' },
    { nome: 'Opa 12', curso: '26/10/2020' },
    { nome: 'Opa 13', curso: '26/10/2020' },
  ];

  constructor(
    private router: Router
  ) { }

  cadastrar() {
    this.router.navigateByUrl('/participante/cadastro');
  }

  editar() {
    this.router.navigateByUrl('/participante/cadastro');
  }

  remover() {
  }
}
