import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { EventoService } from 'src/app/evento/evento.service';
import { AuthGuardService } from 'src/app/login/auth-guard-child.service';
import { AvaliadorService } from 'src/app/avaliador/avaliador.service';

@Component({
  selector: 'app-resultados-trabalhos',
  templateUrl: 'resultados-trabalhos.page.html',
  styleUrls: ['resultados-trabalhos.page.scss'],
})
export class ResultadosTrabalhosPage implements OnInit {

  evento: any;
  avaliadores = [];

  ngOnInit() {
    this.listarAvaliadores();
    this.evento = this.router.getCurrentNavigation().extras.state;
    console.log(this.evento);
  }

  constructor(
    private router: Router,
    private avaliadorService: AvaliadorService
  ) { }

  listarAvaliadores() {
    this.avaliadorService.listarAvaliadorEvento()
      .subscribe(r => {
        this.avaliadores = r;
      });
  }

  nomeAvaliador(idAvaliador: string) {
    let nome = '';
    this.avaliadores.forEach(e => {
      if (e.id === idAvaliador) {
        nome = e.nome;
      }
    });
    return nome;
  }

  voltar() {
    this.router.navigate(['/resultados/eventos']);
  }
}
