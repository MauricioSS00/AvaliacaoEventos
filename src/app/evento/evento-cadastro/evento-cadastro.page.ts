import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

import * as moment from 'moment';
import 'moment/locale/pt-br';

import { EventoService } from './../evento.service';
import { AvaliadorService } from 'src/app/avaliador/avaliador.service';

@Component({
  selector: 'app-cadastro-evento',
  templateUrl: 'evento-cadastro.page.html',
  styleUrls: ['evento-cadastro.page.scss'],
})
export class EventoCadastroPage implements OnInit, OnDestroy {

  subs: Subscription = new Subscription();
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
  trabalhos = [];
  dlgTrabalhos = false;
  trabalho = {
    nome: '',
    link: '',
    avaliador: '',
    curso: '',
    alunos: '',
    avaliacao: [],
    situacao: 'Não Avaliado'
  };
  avaliadores: any[];

  constructor(
    private router: Router,
    private eventoService: EventoService,
    private avaliadorService: AvaliadorService
  ) { }

  ngOnInit() {
    this.buildForm();
    this.listarAvaliadores();
    if (this.router.getCurrentNavigation().extras.state) {
      this.form.patchValue(this.router.getCurrentNavigation().extras.state);
      this.form.get('dataIni').setValue(moment.unix(this.form.value.dataIni.seconds).format('DD/MM/YYYY'));
      this.form.get('dataFim').setValue(moment.unix(this.form.value.dataFim.seconds).format('DD/MM/YYYY'));
      this.trabalhos = this.form.value.trabalhos;
    }
    this.subs.add(EventoService.criteriosAvaliacao.subscribe((avaliacao: any) => {
      console.log(avaliacao);
      this.form.get('avaliacao').setValue(avaliacao);
      this.adicionarAvaliacaoTrabalho();
    }));
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  buildForm() {
    this.form = new FormGroup({
      id: new FormControl(),
      descricao: new FormControl('', Validators.required),
      dataIni: new FormControl('', Validators.required),
      dataFim: new FormControl('', Validators.required),
      avaliacao: new FormControl([]),
      trabalhos: new FormControl([])
    });
  }

  listarAvaliadores() {
    this.subs.add(this.avaliadorService.listarAvaliador()
      .subscribe(r => {
        this.avaliadores = r.map(a => ({ label: a.nome, value: a.id }));
      }));
  }

  salvar() {
    this.form.get('dataIni').setValue(this.formatarData(this.form.value.dataIni));
    this.form.get('dataFim').setValue(this.formatarData(this.form.value.dataFim));
    this.eventoService.incluirEvento(this.form.getRawValue());
    this.router.navigateByUrl('/evento');
  }

  formatarData(d: string): Date | null {
    if (typeof d === 'string') {
      let r = null;
      d = d.replace(/([a-z])/gi, ' ').trim();
      const m = d.match(/(0[1-9]|[12][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/(19[0-9]{2}|2[0-9]{3})/);
      let t = d.substr(10).match(/(\d{2,4})/g);
      if (!t) {
        t = [];
      }
      d = `${d.substr(0, 10)}T${t[0] ? t[0] : '00'}:${t[1] ? t[1] : '00'}:${t[2] ? t[2] : '00'}+0000`;
      if (m) {
        d = `${m[3]}-${m[2]}-${m[1]}${d.substr(10)}`;
      }
      if (d.search(/(19[0-9]{2}|2[0-9]{3})\-(0[1-9]|1[0-2])\-(0[1-9]|[12][0-9]|3[0-1])/) !== -1) {
        r = new Date(Date.parse(d));
      }
      return r ? new Date(r.getTime() + (r.getTimezoneOffset() * 60 * 1000)) : r;
    } else {
      return d;
    }
  }

  criteriosAvaliacao() {
    this.router.navigateByUrl('/avaliacao/cadastro', { state: this.form.value.avaliacao });
  }

  cadastrarTrabalho() {
    this.dlgTrabalhos = true;
  }

  adicionarTrabalho() {
    this.trabalho.avaliacao = this.form.value.avaliacao;
    this.trabalhos.push(this.trabalho);
    this.trabalho = {
      nome: '',
      link: '',
      avaliador: '',
      curso: '',
      alunos: '',
      avaliacao: [],
      situacao: 'Não Avaliado'
    };
    this.form.get('trabalhos').setValue(this.trabalhos);
    this.dlgTrabalhos = false;
  }

  removerTrabalho(trabalho: any) {
    this.trabalhos.splice(this.trabalhos.indexOf(trabalho), 1);
    this.form.get('trabalhos').setValue(this.trabalhos);
  }

  adicionarAvaliacaoTrabalho() {
    this.trabalhos.forEach(t => {
      t.avaliacao = this.form.value.avaliacao;
    });
  }

  nomeAvaliador(idAvaliador: string) {
    if (Array.isArray(this.avaliadores)) {
      return this.avaliadores.filter(a => a.value === idAvaliador)[0].label;
    }
  }

  podeSalvarTrabalho() {
    if (this.trabalho.nome !== '') {
      if (this.trabalho.link !== '') {
        if (this.trabalho.avaliador !== '') {
          if (this.trabalho.curso !== '') {
            if (this.trabalho.alunos !== '') {
              return false;
            }
          }
        }
      }
    }
    return true;
  }
}
