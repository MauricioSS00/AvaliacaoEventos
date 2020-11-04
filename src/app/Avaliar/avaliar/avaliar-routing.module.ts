import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AvaliarPage } from './avaliar.page';

const routes: Routes = [
  {
    path: '',
    component: AvaliarPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AvaliarPageRoutingModule {}
