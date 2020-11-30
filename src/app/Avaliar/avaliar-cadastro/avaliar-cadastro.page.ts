import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { EventoService } from 'src/app/evento/evento.service';
import { AuthGuardService } from 'src/app/login/auth-guard-child.service';

@Component({
  selector: 'app-cadastro-avaliar',
  templateUrl: 'avaliar-cadastro.page.html',
  styleUrls: ['avaliar-cadastro.page.scss'],
})
export class AvaliarCadastroPage implements OnInit {

  criterios = [];
  idEvento: string;
  nomeTrabalho: string;
  evento: any;

  ngOnInit() {
    this.criterios = this.router.getCurrentNavigation().extras.state.criterios;
    this.idEvento = this.router.getCurrentNavigation().extras.state.idEvento;
    this.nomeTrabalho = this.router.getCurrentNavigation().extras.state.nomeTrabalho;
    this.criterios.forEach(e => {
      e.respostaPerg = '';
    });
  }

  constructor(
    private router: Router,
    private eventoService: EventoService,
    private authService: AuthGuardService
  ) { }

  salvar() {
    this.eventoService.listarEventoId(this.idEvento)
      .subscribe((evento: any) => {
        if (!this.evento) {
          this.evento = evento[0];
          this.ajustar();
        }
      });
  }

  ajustar() {
    // tslint:disable-next-line: prefer-for-of
    for (let index = 0; index < this.evento.trabalhos.length; index++) {
      if (this.evento.trabalhos[index].nome === this.nomeTrabalho) {
        // tslint:disable-next-line: prefer-for-of
        for (let index2 = 0; index2 < this.evento.trabalhos[index].avaliador.length; index2++) {
          if (this.evento.trabalhos[index].avaliador[index2].idAvaliador === this.authService.user.id) {
            this.evento.trabalhos[index].avaliador[index2].avaliacao = this.criterios;
            this.evento.trabalhos[index].avaliador[index2].situacao = 'Avaliado';
          }
        }
      }
    }
    this.eventoService.incluirEvento(this.evento);
    this.router.navigate(['/avaliar']);
  }
}
