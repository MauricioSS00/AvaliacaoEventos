import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-participante',
  templateUrl: 'participante-cadastro.page.html',
  styleUrls: ['participante-cadastro.page.scss'],
})
export class ParticipanteCadastroPage implements OnInit {

  form: FormGroup;
  cursos: any[] = [
    { label: 'Sistemas da Informação', value: 'Sistemas da Informação' },
    { label: 'Administração', value: 'Administração' },
    { label: 'Engenharia Civil', value: 'Engenharia Civil' },
    { label: 'Psicologia', value: 'Psicologia' }
  ];

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
      curso: new FormControl('', Validators.required)
    });
  }

  salvar() {
    this.router.navigateByUrl('/participante');
  }
}
