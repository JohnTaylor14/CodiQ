import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/pages/guards/auth.guard';
import { LoginGuard } from './pages/guards/login.guard';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginPageModule),
      canActivate: [LoginGuard]
  },
  {
    path: 'cadastro',
    loadChildren: () =>
      import('./pages/cadastro/cadastro.module').then(
        (m) => m.CadastroPageModule
      ),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'regras',
    loadChildren: () =>
      import('./pages/regras/regras.module').then((m) => m.RegrasPageModule),
  },
  {
    path: 'ranking',
    loadChildren: () =>
      import('./pages/ranking/ranking.module').then((m) => m.RankingPageModule),
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'icone',
    loadChildren: () => import('./pages/icone/icone.module').then( m => m.IconePageModule)
  },
  {
    path: 'assunto',
    loadChildren: () => import('./pages/assunto/assunto.module').then( m => m.AssuntoPageModule)
  },
  {
    path: 'tema-a',
    loadChildren: () => import('./pages/tema-a/tema-a.module').then( m => m.TemaAPageModule)
  },
  {
    path: 'question1-a',
    loadChildren: () => import('./pages/question1-a/question1-a.module').then( m => m.Question1APageModule)
  },
  {
    path: 'question2-a',
    loadChildren: () => import('./pages/question2-a/question2-a.module').then( m => m.Question2APageModule)
  },
  {
    path: 'question3-a',
    loadChildren: () => import('./pages/question3-a/question3-a.module').then( m => m.Question3APageModule)
  },
  {
    path: 'question4-a',
    loadChildren: () => import('./pages/question4-a/question4-a.module').then( m => m.Question4APageModule)
  },
  {
    path: 'resultado-a',
    loadChildren: () => import('./pages/resultado-a/resultado-a.module').then( m => m.ResultadoAPageModule)
  },
  {
    path: 'tema-b',
    loadChildren: () => import('./pages/tema-b/tema-b.module').then( m => m.TemaBPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
