import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

import * as moment from 'moment';
import 'moment/locale/pt-br';

import { EventoService } from './../evento.service';

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

  constructor(
    private router: Router,
    private eventoService: EventoService
  ) { }

  ngOnInit() {
    this.buildForm();
    if (this.router.getCurrentNavigation().extras.state) {
      this.form.patchValue(this.router.getCurrentNavigation().extras.state);
      this.form.get('dataIni').setValue(moment.unix(this.form.value.dataIni.seconds).format('DD/MM/YYYY'));
      this.form.get('dataFim').setValue(moment.unix(this.form.value.dataFim.seconds).format('DD/MM/YYYY'));
    }
    this.subs.add(EventoService.criteriosAvaliacao.subscribe((avaliacao: any) => {
      this.form.get('avaliacao').setValue(avaliacao);
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
      avaliacao: new FormControl('')
    });
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
}
