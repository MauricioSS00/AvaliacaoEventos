import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventoCadastroPage } from './evento-cadastro.page';

const routes: Routes = [
  {
    path: '',
    component: EventoCadastroPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventoCadastroPageRoutingModule {}
