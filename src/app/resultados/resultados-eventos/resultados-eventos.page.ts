import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import 'moment/locale/pt-br';
import * as moment from 'moment';

import { EventoService } from 'src/app/evento/evento.service';

@Component({
  selector: 'app-resultados-eventos',
  templateUrl: 'resultados-eventos.page.html',
  styleUrls: ['resultados-eventos.page.scss'],
})
export class ResultadosEventosPage implements OnInit {

  subs: Subscription = new Subscription();
  eventos: any[] = [];

  constructor(
    private router: Router,
    private eventoService: EventoService
  ) { }

  ngOnInit() {
    this.listarEventos();
  }

  listarEventos() {
    this.subs.add(this.eventoService.listarEvento()
      .subscribe(r => {
        this.eventos = r;
      }));
  }

  formatarData(data: any) {
    return moment.unix(data).format('DD/MM/YYYY');
  }

  acessarTrabalhos(event: any) {
    this.router.navigateByUrl('/resultados/trabalhos', {state: event });
  }
}
