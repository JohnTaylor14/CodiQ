import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResultadoAPage } from './resultado-a.page';

const routes: Routes = [
  {
    path: '',
    component: ResultadoAPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResultadoAPageRoutingModule {}
