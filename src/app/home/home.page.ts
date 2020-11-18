import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  paginas = [
    { titulo: 'Evento', rota: '/evento' },
    { titulo: 'Avaliador', rota: '/avaliador' },
    { titulo: 'Avaliar Apresentação', rota: '/avaliar' },
    { titulo: 'Resultado dos Eventos', rota: '/evento' }
  ];

  constructor() { }

}
