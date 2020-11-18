import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Evento } from 'src/app/evento/evento.model';
import { EventoService } from 'src/app/evento/evento.service';
import { Subscription } from 'rxjs';
import * as moment from 'moment';
import 'moment/locale/pt-br';

@Component({
  selector: 'app-avaliar',
  templateUrl: 'avaliar.page.html',
  styleUrls: ['avaliar.page.scss'],
})
export class AvaliarPage implements OnInit {

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
    this.router.navigateByUrl('/avaliar/trabalhos', {state: event });
  }
}
