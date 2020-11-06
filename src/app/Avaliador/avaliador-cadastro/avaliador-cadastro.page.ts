import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { AvaliadorService } from '../avaliador.service';

@Component({
  selector: 'app-cadastro-avaliador',
  templateUrl: 'avaliador-cadastro.page.html',
  styleUrls: ['avaliador-cadastro.page.scss'],
})
export class AvaliadorCadastroPage implements OnInit {

  form: FormGroup;

  constructor(
    private router: Router,
    private avaliadorService: AvaliadorService
  ) { }

  ngOnInit() {
    this.buildForm();
    if (this.router.getCurrentNavigation().extras.state) {
      this.form.patchValue(this.router.getCurrentNavigation().extras.state);
    }
  }

  buildForm() {
    this.form = new FormGroup({
      id: new FormControl(),
      nome: new FormControl('', Validators.required),
      area: new FormControl('', Validators.required)
    });
  }

  salvar() {
    this.avaliadorService.incluirAvaliador(this.form.getRawValue());
    this.router.navigateByUrl('/avaliador');
  }
}
