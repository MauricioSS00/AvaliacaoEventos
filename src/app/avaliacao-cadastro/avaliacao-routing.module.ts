import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AvaliacaoCadastroPage } from './avaliacao-cadastro.page';

const routes: Routes = [
  {
    path: '',
    component: AvaliacaoCadastroPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AvaliacaoCadastroPageRoutingModule {}
