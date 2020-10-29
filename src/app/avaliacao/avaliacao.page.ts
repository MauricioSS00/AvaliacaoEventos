import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-avaliacao',
  templateUrl: 'avaliacao.page.html',
  styleUrls: ['avaliacao.page.scss'],
})
export class AvaliacaoPage {

  constructor(
    private router: Router
  ) { }

  cadastrar() {
    this.router.navigateByUrl('/avaliacao/cadastro', { state: { acessarPartida: true } });
  }

}
