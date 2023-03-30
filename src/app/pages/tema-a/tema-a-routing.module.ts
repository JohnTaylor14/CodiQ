import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TemaAPage } from './tema-a.page';

const routes: Routes = [
  {
    path: '',
    component: TemaAPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TemaAPageRoutingModule {}
