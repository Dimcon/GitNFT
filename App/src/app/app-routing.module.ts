import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'register-github',
    loadChildren: () => import('./pages/register-github/register-github.module').then(m => m.RegisterGithubPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardPageModule)
  },
  {
    path: 'nfts',
    loadChildren: () => import('./pages/nfts/nfts.module').then(m => m.NftsPageModule)
  },
  {
    path: 'gits',
    loadChildren: () => import('./pages/gits/gits.module').then(m => m.GitsPageModule)
  },
  {
    path: 'register-github',
    loadChildren: () => import('./pages/register-github/register-github.module').then( m => m.RegisterGithubPageModule)
  },


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
