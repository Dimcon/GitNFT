import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GitsPage } from './gits.page';

const routes: Routes = [
  {
    path: '',
    component: GitsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GitsPageRoutingModule {}
