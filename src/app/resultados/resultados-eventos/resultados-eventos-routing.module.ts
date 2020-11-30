import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ResultadosEventosPage } from './resultados-eventos.page';

const routes: Routes = [
  {
    path: '',
    component: ResultadosEventosPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResultadosEventosPageRoutingModule {}
