import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EventoAvaliadorPage } from './evento-avaliador.page';

const routes: Routes = [
  {
    path: '',
    component: EventoAvaliadorPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventoAvaliadorPageRoutingModule { }
