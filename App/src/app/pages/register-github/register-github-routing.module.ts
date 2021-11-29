import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterGithubPage } from './register-github.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterGithubPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterGithubPageRoutingModule {}
