import { Component } from '@angular/core';
import { AuthGuardService } from '../login/auth-guard-child.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  paginas = [];

  constructor(
    public authService: AuthGuardService
  ) {
    if (this.authService.user.tipo === 2) {
      this.paginas = [
        { titulo: 'Evento', rota: '/evento' },
        { titulo: 'Usuário', rota: '/avaliador' },
        { titulo: 'Avaliar Apresentação', rota: '/avaliar' },
        { titulo: 'Resultado dos Eventos', rota: '/evento' }
      ];
    } else {
      this.paginas = [
        { titulo: 'Avaliar Apresentação', rota: '/avaliar' }
      ];
    }
  }

}
