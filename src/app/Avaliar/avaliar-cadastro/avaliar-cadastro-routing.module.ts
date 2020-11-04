import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AvaliarCadastroPage } from './avaliar-cadastro.page';

const routes: Routes = [
  {
    path: '',
    component: AvaliarCadastroPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AvaliarCadastroPageRoutingModule {}
