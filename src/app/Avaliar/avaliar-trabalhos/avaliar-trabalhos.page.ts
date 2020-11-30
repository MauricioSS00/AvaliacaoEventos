import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuardService } from '../../login/auth-guard-child.service';

@Component({
  selector: 'app-avaliar-trabalhos',
  templateUrl: 'avaliar-trabalhos.page.html',
  styleUrls: ['avaliar-trabalhos.page.scss'],
})
export class AvaliarTrabalhosPage implements OnInit {

  evento: any;
  trabalhos = [];
  situacaoTrab = [];

  constructor(
    private router: Router,
    public authService: AuthGuardService

  ) { }

  ngOnInit() {
    this.evento = this.router.getCurrentNavigation().extras.state;
    this.evento.trabalhos.forEach(e => {
      e.avaliador.forEach(a => {
        if (a.idAvaliador === this.authService.user.id) {
          this.situacaoTrab.push(a.situacao ? a.situacao : 'Não Avaliado');
          this.trabalhos.push(Object.assign(e, {}));
        }
      });
    });
  }

  acessarTrabalho(trabalho: any) {
    this.router.navigateByUrl('/avaliar/cadastro', {
      state: {
        idEvento: this.evento.id, nomeTrabalho: trabalho.nome, criterios: this.evento.avaliacao
      }
    });
  }
}
