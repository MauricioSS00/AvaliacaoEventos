import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  paginas = [
    { titulo: 'Evento', rota: '/evento' },
    { titulo: 'Participante', rota: '/participante' },
    { titulo: 'Avaliador', rota: '/avaliador' },
    { titulo: 'Apresentação', rota: '/evento' },
    { titulo: 'Avaliar Apresentação', rota: '/evento' },
    { titulo: 'Resultado dos Eventos', rota: '/evento' }
  ];

  constructor() { }

}
