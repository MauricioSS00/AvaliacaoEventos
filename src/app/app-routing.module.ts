import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'avaliador/cadastro',
    // tslint:disable-next-line: max-line-length
    loadChildren: () => import('./avaliador/avaliador-cadastro/avaliador-cadastro.module').then(m => m.AvaliadorCadastroPageModule)
  },
  {
    path: 'avaliador',
    loadChildren: () => import('./avaliador/avaliador/avaliador.module').then(m => m.AvaliadorPageModule)
  },
  {
    path: 'participante/cadastro',
    // tslint:disable-next-line: max-line-length
    loadChildren: () => import('./participante/participante-cadastro/participante-cadastro.module').then(m => m.ParticipanteCadastroPageModule)
  },
  {
    path: 'participante',
    loadChildren: () => import('./participante/participante/participante.module').then(m => m.ParticipantePageModule)
  },
  {
    path: 'avaliacao/cadastro',
    loadChildren: () => import('./avaliacao/avaliacao-cadastro/avaliacao-cadastro.module').then(m => m.AvaliacaoCadastroPageModule)
  },
  {
    path: 'avaliacao',
    loadChildren: () => import('./avaliacao/avaliacao/avaliacao.module').then(m => m.AvaliacaoPageModule)
  },
  {
    path: 'evento/apresentador',
    loadChildren: () => import('./evento/evento-apresentador/evento-apresentador.module').then(m => m.EventoApresentadorPageModule)
  },
  {
    path: 'evento/avaliador',
    loadChildren: () => import('./evento/evento-avaliador/evento-avaliador.module').then(m => m.EventoAvaliadorPageModule)
  },
  {
    path: 'evento/cadastro',
    loadChildren: () => import('./evento/evento-cadastro/evento-cadastro.module').then(m => m.EventoCadastroPageModule)
  },
  {
    path: 'evento',
    loadChildren: () => import('./evento/evento/evento.module').then(m => m.EventoPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
