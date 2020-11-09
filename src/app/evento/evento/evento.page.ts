import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AlertController } from '@ionic/angular';

import * as moment from 'moment';
import 'moment/locale/pt-br';

import { EventoService } from './../evento.service';
import { Evento } from './../evento.model';
import { AvaliadorService } from './../../avaliador/avaliador.service';
import { Avaliador } from './../../avaliador/avaliador.model';

@Component({
  selector: 'app-evento',
  templateUrl: 'evento.page.html',
  styleUrls: ['evento.page.scss'],
})
export class EventoPage implements OnInit, OnDestroy {

  subs: Subscription = new Subscription();

  eventos: Evento[];
  eventoSelecionado: Evento;
  avaliadores: Avaliador[];
  avaliadoresSelecionados: Avaliador[];

  constructor(
    private router: Router,
    private eventoService: EventoService,
    private avaliadorService: AvaliadorService,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    this.listarEventos();
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  listarEventos() {
    this.subs.add(this.eventoService.listarEvento()
      .subscribe(r => {
        this.eventos = r;
      }));
  }

  listarAvaliadores() {
    this.subs.add(this.avaliadorService.listarAvaliador()
      .subscribe(r => {
        this.avaliadores = r;
      }));
  }

  formatarData(data: any) {
    return moment.unix(data).format('DD/MM/YYYY');
  }

  cadastrar() {
    this.router.navigateByUrl('/evento/cadastro');
  }

  editar() {
    this.router.navigateByUrl('/evento/cadastro', { state: this.eventoSelecionado });
  }

  async remover() {
    const alert = await this.alertController.create({
      header: 'Excluir Evento',
      message: 'Deseja realmente excluir?',
      buttons: [
        {
          text: 'Excluir',
          handler: () => {
            this.eventoService.removerEvento(this.eventoSelecionado.id);
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary'
        }
      ]
    });
    await alert.present();
  }

  relAvaliadores() {
    this.router.navigateByUrl('/evento/avaliador');
  }

  relApresetador() {
    this.router.navigateByUrl('/evento/apresentador');
  }
}
