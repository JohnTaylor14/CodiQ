import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Question1APage } from './question1-a.page';

const routes: Routes = [
  {
    path: '',
    component: Question1APage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Question1APageRoutingModule {}
