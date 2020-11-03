import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';

import { OverlayPanel } from 'primeng/overlaypanel';

@Component({
  selector: 'app-cadastro-avaliacao',
  templateUrl: 'avaliacao-cadastro.page.html',
  styleUrls: ['avaliacao-cadastro.page.scss'],
})
export class AvaliacaoCadastroPage {

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

  constructor() {
    this.buildForm();
  }

  buildForm() {
    this.form = new FormGroup({
      cod: new FormControl(),
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
}
