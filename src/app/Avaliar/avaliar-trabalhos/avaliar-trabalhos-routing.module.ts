import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AvaliarTrabalhosPage } from './avaliar-trabalhos.page';

const routes: Routes = [
  {
    path: '',
    component: AvaliarTrabalhosPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AvaliarTrabalhosPageRoutingModule {}
