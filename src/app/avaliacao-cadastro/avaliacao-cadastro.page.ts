import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';

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
    tipo: '',
    notaMin: 0,
    notaMax: 1,
    opcoes: ''
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
    this.criterios.push(this.criterio);
  }
}
