import { Component } from '@angular/core';

@Component({
  selector: 'app-evento',
  templateUrl: 'evento.page.html',
  styleUrls: ['evento.page.scss'],
})
export class EventoPage {

  eventos: any[] = [
    { descricao: 'Opa 1', dataIni: '26/10/2020', dataFim: '26/10/2020' },
    { descricao: 'Opa 2', dataIni: '26/10/2020', dataFim: '26/10/2020' },
    { descricao: 'Opa 3', dataIni: '26/10/2020', dataFim: '26/10/2020' },
    { descricao: 'Opa 4', dataIni: '26/10/2020', dataFim: '26/10/2020' },
    { descricao: 'Opa 5', dataIni: '26/10/2020', dataFim: '26/10/2020' },
    { descricao: 'Opa 6', dataIni: '26/10/2020', dataFim: '26/10/2020' },
    { descricao: 'Opa 7', dataIni: '26/10/2020', dataFim: '26/10/2020' },
    { descricao: 'Opa 8', dataIni: '26/10/2020', dataFim: '26/10/2020' },
    { descricao: 'Opa 9', dataIni: '26/10/2020', dataFim: '26/10/2020' },
    { descricao: 'Opa 10', dataIni: '26/10/2020', dataFim: '26/10/2020' },
    { descricao: 'Opa 11', dataIni: '26/10/2020', dataFim: '26/10/2020' },
    { descricao: 'Opa 12', dataIni: '26/10/2020', dataFim: '26/10/2020' },
    { descricao: 'Opa 13', dataIni: '26/10/2020', dataFim: '26/10/2020' },
  ];
  evento = {
    descricao: '',
    dataIni: '',
    dataFim: ''
  };
  dialogCad = false;
  cadastrando = false;

  avaliadoresSelecionados: any[];
  avaliadores: any[] = [
    {nome: 'Mauricio'},
    {nome: 'Conte'},
    {nome: 'Gabriel'},
  ];
  dialogRelAvaliadores = false;

  constructor() { }

  dialogCrud(cadastrar = false) {
    this.cadastrando = cadastrar;
    if (cadastrar) {
      this.evento = {
        descricao: '',
        dataIni: '',
        dataFim: ''
      };
    }
    this.dialogCad = true;
  }

  salvar() {
    if (this.cadastrando) {
      this.eventos.push(this.evento);
    }
    this.dialogCad = false;
  }

  remover() {
    const index = this.eventos.indexOf(this.evento);
    this.eventos.splice(index, 1);
  }

  relParts() {

  }

  cancelar() {
    this.dialogCad = false;
    this.evento = {
      descricao: '',
      dataIni: '',
      dataFim: ''
    };
  }
}
