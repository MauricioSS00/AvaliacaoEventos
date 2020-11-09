import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';

import { EventoService } from './../../evento/evento.service';
import { OverlayPanel } from 'primeng/overlaypanel';

@Component({
  selector: 'app-cadastro-avaliacao',
  templateUrl: 'avaliacao-cadastro.page.html',
  styleUrls: ['avaliacao-cadastro.page.scss'],
})
export class AvaliacaoCadastroPage implements OnInit {

  form: FormGroup;
  dialogCriterio = false;
  tiposCriterio: any[] = [
    { label: 'Descritiva', value: 1 },
    { label: 'Range de Nota', value: 2 },
    { label: 'Múltipla Escolha', value: 3 },
    { label: 'Única Escolha', value: 4 },
  ];
  criterio = {
    descricao: '',
    tipo: 1,
    notaMin: 0,
    notaMax: 1,
    opcoes: '',
    possiveisRespostas: []
  };
  criterios: any[] = [];

  constructor(
    private router: Router
  ) {
    this.buildForm();
  }

  ngOnInit() {
    if (this.router.getCurrentNavigation().extras.state) {
      this.form.patchValue(this.router.getCurrentNavigation().extras.state);
      this.criterios = this.router.getCurrentNavigation().extras.state.criterios;
    }
  }

  buildForm() {
    this.form = new FormGroup({
      nome: new FormControl('', Validators.required),
      descricao: new FormControl('', Validators.required)
    });
  }

  adicionarCriterio() {
    if (this.criterio.tipo === 3 || this.criterio.tipo === 4) {
      this.criterio = this.possivelResp(this.criterio);
    }
    this.criterios.push(this.criterio);
    this.criterio = {
      descricao: '',
      tipo: 1,
      notaMin: 0,
      notaMax: 1,
      opcoes: '',
      possiveisRespostas: []
    };
  }

  possivelResp(criterio: any) {
    criterio.possiveisRespostas = criterio.opcoes.split(',');
    return criterio;
  }

  exibirDesc(overlaypanel: OverlayPanel, event: any) {
    overlaypanel.toggle(event);
  }

  ocultarDesc(overlaypanel: OverlayPanel) {
    overlaypanel.hide();
  }

  salvarCriterios() {
    EventoService.criteriosAvaliacao.emit(Object.assign(this.form.getRawValue(), { criterios: this.criterios }));
    this.router.navigateByUrl('/evento/cadastro');
  }
}
