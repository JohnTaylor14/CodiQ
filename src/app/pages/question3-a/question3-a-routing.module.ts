import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Question3APage } from './question3-a.page';

const routes: Routes = [
  {
    path: '',
    component: Question3APage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Question3APageRoutingModule {}
