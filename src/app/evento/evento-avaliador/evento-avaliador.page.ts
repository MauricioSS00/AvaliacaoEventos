import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-avaliador-evento',
  templateUrl: 'evento-avaliador.page.html',
  styleUrls: ['evento-avaliador.page.scss'],
})
export class EventoAvaliadorPage {

  avaliadores: any[] = [
    { nome: 'Mauricio da Silva', area: 'Engenharia aeroespacial' },
    { nome: 'Daniel Conte', area: 'Engenharia da aviação' },
    { nome: 'Gabriel Soares', area: 'Engenharia marinha' }
  ];
  avaliadoresSelecionados: any[];

  constructor(
    private router: Router
  ) { }

  salvar() {
    this.router.navigateByUrl('/evento');
  }
}
