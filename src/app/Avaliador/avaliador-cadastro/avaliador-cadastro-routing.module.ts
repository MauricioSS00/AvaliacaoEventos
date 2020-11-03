import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvaliadorCadastroPage } from './avaliador-cadastro.page';

const routes: Routes = [
  {
    path: '',
    component: AvaliadorCadastroPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AvaliadorCadastroPageRoutingModule {}
