import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-avaliador',
  templateUrl: 'avaliador.page.html',
  styleUrls: ['avaliador.page.scss'],
})
export class AvaliadorPage {

  avaliador: any;
  avaliadores: any[] = [
    { nome: 'Opa 1', area: '26/10/2020' },
    { nome: 'Opa 2', area: '26/10/2020' },
    { nome: 'Opa 3', area: '26/10/2020' },
    { nome: 'Opa 4', area: '26/10/2020' },
    { nome: 'Opa 5', area: '26/10/2020' },
    { nome: 'Opa 6', area: '26/10/2020' },
    { nome: 'Opa 7', area: '26/10/2020' },
    { nome: 'Opa 8', area: '26/10/2020' },
    { nome: 'Opa 9', area: '26/10/2020' },
    { nome: 'Opa 10', area: '26/10/2020' },
    { nome: 'Opa 11', area: '26/10/2020' },
    { nome: 'Opa 12', area: '26/10/2020' },
    { nome: 'Opa 13', area: '26/10/2020' },
  ];

  constructor(
    private router: Router
  ) { }

  cadastrar() {
    this.router.navigateByUrl('/avaliador/cadastro');
  }

  editar() {
    this.router.navigateByUrl('/avaliador/cadastro');
  }

  remover() {
  }
}
