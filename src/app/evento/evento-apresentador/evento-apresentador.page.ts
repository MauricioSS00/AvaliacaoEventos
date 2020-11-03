import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-apresentador-evento',
  templateUrl: 'evento-apresentador.page.html',
  styleUrls: ['evento-apresentador.page.scss'],
})
export class EventoApresentadorPage {

  apresentadores: any[] = [
    { nome: 'Mauricio da Silva', curso: 'Sistemas da Informação' },
    { nome: 'Daniel Conte', curso: 'Sistemas da Informação' },
    { nome: 'Gabriel Soares', curso: 'Sistemas da Informação' }
  ];
  apresentadoresSelecionados: any[];

  constructor(
    private router: Router
  ) { }

  salvar() {
    this.router.navigateByUrl('/evento');
  }
}
