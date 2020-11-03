import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvaliadorPage } from './avaliador.page';

const routes: Routes = [
  {
    path: '',
    component: AvaliadorPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AvaliadorPageRoutingModule {}
