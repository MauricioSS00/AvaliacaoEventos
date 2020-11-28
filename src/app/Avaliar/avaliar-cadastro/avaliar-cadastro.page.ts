import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-avaliar',
  templateUrl: 'avaliar-cadastro.page.html',
  styleUrls: ['avaliar-cadastro.page.scss'],
})
export class AvaliarCadastroPage implements OnInit {

  criterios = [];

  ngOnInit() {
    this.criterios = this.router.getCurrentNavigation().extras.state.criterios;
  }

  constructor(
    private router: Router
  ) { }

  salvar() {
    this.router.navigateByUrl('/avaliar/trabalhos');
  }
}
