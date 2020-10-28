import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  paginas = [
    { titulo: 'Evento', rota: '/evento' },
    { titulo: 'Participante', rota: '/evento' },
    { titulo: 'Avaliador', rota: '/evento' },
    { titulo: 'Apresentação', rota: '/evento' },
    { titulo: 'Avaliação', rota: '/avaliacao' },
    { titulo: 'Resultado dos Eventos', rota: '/evento' }
  ];

  constructor() { }

}
