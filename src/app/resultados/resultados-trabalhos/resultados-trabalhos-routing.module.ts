import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ResultadosTrabalhosPage } from './resultados-trabalhos.page';

const routes: Routes = [
  {
    path: '',
    component: ResultadosTrabalhosPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResultadosTrabalhosPageRoutingModule {}
