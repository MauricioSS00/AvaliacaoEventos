import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-avaliar-trabalhos',
  templateUrl: 'avaliar-trabalhos.page.html',
  styleUrls: ['avaliar-trabalhos.page.scss'],
})
export class AvaliarTrabalhosPage {

  trabalhos: any[] = [
    {
      nome: 'Opa 1', alunos: 'Maurício da Silva, Delmison Seidel, Gabriel Mello',
      curso: 'Sistemas de Informação', situacao: 'Não Avaliado'
    },
    {
      nome: 'Opa 2', alunos: 'Maurício da Silva, Delmison Seidel, Gabriel Mello',
      curso: 'Sistemas de Informação', situacao: 'Não Avaliado'
    },
    {
      nome: 'Opa 3', alunos: 'Maurício da Silva, Delmison Seidel, Gabriel Mello',
      curso: 'Sistemas de Informação', situacao: 'Avaliado'
    },
    {
      nome: 'Opa 4', alunos: 'Maurício da Silva, Delmison Seidel, Gabriel Mello',
      curso: 'Sistemas de Informação', situacao: 'Não Avaliado'
    },
    {
      nome: 'Opa 5', alunos: 'Maurício da Silva, Delmison Seidel, Gabriel Mello',
      curso: 'Sistemas de Informação', situacao: 'Não Avaliado'
    },
    {
      nome: 'Opa 6', alunos: 'Maurício da Silva, Delmison Seidel, Gabriel Mello',
      curso: 'Sistemas de Informação', situacao: 'Não Avaliado'
    },
    {
      nome: 'Opa 7', alunos: 'Maurício da Silva, Delmison Seidel, Gabriel Mello',
      curso: 'Sistemas de Informação', situacao: 'Não Avaliado'
    },
    {
      nome: 'Opa 8', alunos: 'Maurício da Silva, Delmison Seidel, Gabriel Mello',
      curso: 'Sistemas de Informação', situacao: 'Avaliado'
    },
    {
      nome: 'Opa 9', alunos: 'Maurício da Silva, Delmison Seidel, Gabriel Mello',
      curso: 'Sistemas de Informação', situacao: 'Não Avaliado'
    },
    {
      nome: 'Opa 10', alunos: 'Maurício da Silva, Delmison Seidel, Gabriel Mello',
      curso: 'Sistemas de Informação', situacao: 'Não Avaliado'
    },
    {
      nome: 'Opa 11', alunos: 'Maurício da Silva, Delmison Seidel, Gabriel Mello',
      curso: 'Sistemas de Informação', situacao: 'Avaliado'
    },
    {
      nome: 'Opa 12', alunos: 'Maurício da Silva, Delmison Seidel, Gabriel Mello',
      curso: 'Sistemas de Informação', situacao: 'Não Avaliado'
    },
    {
      nome: 'Opa 13', alunos: 'Maurício da Silva, Delmison Seidel, Gabriel Mello',
      curso: 'Sistemas de Informação', situacao: 'Não Avaliado'
    },
  ];

  constructor(
    private router: Router
  ) { }

  acessarTrabalho() {
    this.router.navigateByUrl('/avaliar/cadastro');
  }
}
