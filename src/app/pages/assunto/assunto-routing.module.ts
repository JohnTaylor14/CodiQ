import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssuntoPage } from './assunto.page';

const routes: Routes = [
  {
    path: '',
    component: AssuntoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssuntoPageRoutingModule {}
