import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParticipantePage } from './participante.page';

const routes: Routes = [
  {
    path: '',
    component: ParticipantePage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParticipantePageRoutingModule {}
