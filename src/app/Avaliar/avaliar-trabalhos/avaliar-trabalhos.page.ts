import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-avaliar-trabalhos',
  templateUrl: 'avaliar-trabalhos.page.html',
  styleUrls: ['avaliar-trabalhos.page.scss'],
})
export class AvaliarTrabalhosPage implements OnInit {

  evento: any = {
    trabalhos: []
  };
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.evento = this.router.getCurrentNavigation().extras.state;
  }

  acessarTrabalho() {
    this.router.navigateByUrl('/avaliar/cadastro');
  }
}
