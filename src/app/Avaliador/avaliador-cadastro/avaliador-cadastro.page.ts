import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-avaliador',
  templateUrl: 'avaliador-cadastro.page.html',
  styleUrls: ['avaliador-cadastro.page.scss'],
})
export class AvaliadorCadastroPage implements OnInit {

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
      area: new FormControl('', Validators.required)
    });
  }

  salvar() {
    this.router.navigateByUrl('/avaliador');
  }
}
