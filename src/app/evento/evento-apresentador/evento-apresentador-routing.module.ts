import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EventoApresentadorPage } from './evento-apresentador.page';

const routes: Routes = [
  {
    path: '',
    component: EventoApresentadorPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventoApresentadorPageRoutingModule {}
