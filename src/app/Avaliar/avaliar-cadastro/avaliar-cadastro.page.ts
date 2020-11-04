import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';

import { OverlayPanel } from 'primeng/overlaypanel';

@Component({
  selector: 'app-cadastro-avaliar',
  templateUrl: 'avaliar-cadastro.page.html',
  styleUrls: ['avaliar-cadastro.page.scss'],
})
export class AvaliarCadastroPage {

  criterios: any[] = [
    {
      descricao: 'Teste 1',
      tipo: 1,
      notaMin: 0,
      notaMax: 1,
      opcoes: '',
      possiveisRespostas: []
    },
    {
      descricao: 'Teste 2',
      tipo: 2,
      notaMin: 0,
      notaMax: 10,
      opcoes: '',
      possiveisRespostas: []
    },
    {
      descricao: 'Teste 3',
      tipo: 3,
      notaMin: 0,
      notaMax: 1,
      opcoes: 'Resposta 1,Resposta 2,Resposta 3,Resposta 4',
      possiveisRespostas: [
        'Resposta 1',
        'Resposta 2',
        'Resposta 3',
        'Resposta 4'
      ]
    },
    {
      descricao: 'Teste 4',
      tipo: 4,
      notaMin: 0,
      notaMax: 1,
      opcoes: 'Resposta 1,Resposta 2,Resposta 3,Resposta 4',
      possiveisRespostas: [
        'Resposta 1',
        'Resposta 2',
        'Resposta 3',
        'Resposta 4'
      ]
    }
  ];

  constructor(
    private router: Router
  ) { }

  salvar() {
    this.router.navigateByUrl('/avaliar/trabalhos');
  }
}
