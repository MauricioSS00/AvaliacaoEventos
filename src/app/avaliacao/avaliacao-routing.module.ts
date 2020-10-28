import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AvaliacaoPage } from './avaliacao.page';

const routes: Routes = [
  {
    path: '',
    component: AvaliacaoPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AvaliacaoPageRoutingModule {}
