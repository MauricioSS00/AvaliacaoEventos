import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-evento',
  templateUrl: 'evento-cadastro.page.html',
  styleUrls: ['evento-cadastro.page.scss'],
})
export class EventoCadastroPage implements OnInit {

  locale = {
    firstDayOfWeek: 0,
    dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
    dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
    dayNamesMin: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
    // tslint:disable-next-line: max-line-length
    monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
    monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    today: 'Hoje',
    clear: 'Limpar',
    dateFormat: 'dd/mm/yy',
    weekHeader: 'Sem'
  };
  form: FormGroup;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.form = new FormGroup({
      cod: new FormControl(),
      nome: new FormControl('', Validators.required),
      dataIni: new FormControl('', Validators.required),
      dataFim: new FormControl('', Validators.required)
    });
  }

  salvar() {
    this.router.navigateByUrl('/evento');
  }

  criteriosAvaliacao() {
    this.router.navigateByUrl('/avaliacao/cadastro');
  }
}
