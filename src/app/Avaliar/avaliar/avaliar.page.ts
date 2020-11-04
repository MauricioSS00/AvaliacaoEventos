import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-avaliar',
  templateUrl: 'avaliar.page.html',
  styleUrls: ['avaliar.page.scss'],
})
export class AvaliarPage {

  eventos: any[] = [
    { descricao: 'Opa 1', dataIni: '26/10/2020', dataFim: '26/10/2020' },
    { descricao: 'Opa 2', dataIni: '26/10/2020', dataFim: '26/10/2020' },
    { descricao: 'Opa 3', dataIni: '26/10/2020', dataFim: '26/10/2020' },
    { descricao: 'Opa 4', dataIni: '26/10/2020', dataFim: '26/10/2020' },
    { descricao: 'Opa 5', dataIni: '26/10/2020', dataFim: '26/10/2020' },
    { descricao: 'Opa 6', dataIni: '26/10/2020', dataFim: '26/10/2020' },
    { descricao: 'Opa 7', dataIni: '26/10/2020', dataFim: '26/10/2020' },
    { descricao: 'Opa 8', dataIni: '26/10/2020', dataFim: '26/10/2020' },
    { descricao: 'Opa 9', dataIni: '26/10/2020', dataFim: '26/10/2020' },
    { descricao: 'Opa 10', dataIni: '26/10/2020', dataFim: '26/10/2020' },
    { descricao: 'Opa 11', dataIni: '26/10/2020', dataFim: '26/10/2020' },
    { descricao: 'Opa 12', dataIni: '26/10/2020', dataFim: '26/10/2020' },
    { descricao: 'Opa 13', dataIni: '26/10/2020', dataFim: '26/10/2020' },
  ];

  constructor(
    private router: Router
  ) { }

  acessarTrabalhos() {
    this.router.navigateByUrl('/avaliar/trabalhos');
  }
}
