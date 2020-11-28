import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './login/auth-guard-child.service';

const routes: Routes = [
  {
    path: 'avaliar/trabalhos',
    loadChildren: () => import('./avaliar/avaliar-trabalhos/avaliar-trabalhos.module').then(m => m.AvaliarTrabalhosPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'avaliar/cadastro',
    loadChildren: () => import('./avaliar/avaliar-cadastro/avaliar-cadastro.module').then(m => m.AvaliarCadastroPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'avaliar',
    loadChildren: () => import('./avaliar/avaliar/avaliar.module').then(m => m.AvaliarPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'avaliador/cadastro',
    loadChildren: () => import('./avaliador/avaliador-cadastro/avaliador-cadastro.module').then(m => m.AvaliadorCadastroPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'avaliador',
    loadChildren: () => import('./avaliador/avaliador/avaliador.module').then(m => m.AvaliadorPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'participante/cadastro',
    // tslint:disable-next-line: max-line-length
    loadChildren: () => import('./participante/participante-cadastro/participante-cadastro.module').then(m => m.ParticipanteCadastroPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'participante',
    loadChildren: () => import('./participante/participante/participante.module').then(m => m.ParticipantePageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'avaliacao/cadastro',
    loadChildren: () => import('./avaliacao/avaliacao-cadastro/avaliacao-cadastro.module').then(m => m.AvaliacaoCadastroPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'avaliacao',
    loadChildren: () => import('./avaliacao/avaliacao/avaliacao.module').then(m => m.AvaliacaoPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'evento/apresentador',
    loadChildren: () => import('./evento/evento-apresentador/evento-apresentador.module').then(m => m.EventoApresentadorPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'evento/avaliador',
    loadChildren: () => import('./evento/evento-avaliador/evento-avaliador.module').then(m => m.EventoAvaliadorPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'evento/cadastro',
    loadChildren: () => import('./evento/evento-cadastro/evento-cadastro.module').then(m => m.EventoCadastroPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'evento',
    loadChildren: () => import('./evento/evento/evento.module').then(m => m.EventoPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: '',
    redirectTo: 'login',
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
