import { Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

import { AvaliadorService } from '../avaliador.service';
import { Avaliador } from '../avaliador.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-avaliador',
  templateUrl: 'avaliador.page.html',
  styleUrls: ['avaliador.page.scss'],
})
export class AvaliadorPage implements OnInit, OnDestroy {

  _subs: Subscription = new Subscription();
  avaliador: Avaliador;
  avaliadores: Avaliador[];

  constructor(
    private router: Router,
    private avaliadorService: AvaliadorService,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    this.listarAvaliadores();
  }

  ngOnDestroy() {
    this._subs.unsubscribe();
  }

  listarAvaliadores() {
    this._subs.add(this.avaliadorService.listarAvaliador()
      .subscribe(r => {
        this.avaliadores = r;
      }));
  }

  cadastrar() {
    this.router.navigateByUrl('/avaliador/cadastro');
  }

  editar() {
    this.router.navigateByUrl('/avaliador/cadastro', { state: this.avaliador });
  }

  async remover() {
    const alert = await this.alertController.create({
      header: 'Excluir Avaliador',
      message: 'Deseja realmente excluir?',
      buttons: [
        {
          text: 'Excluir',
          handler: () => {
            this.avaliadorService.removerAvaliador(this.avaliador.id);
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
}
