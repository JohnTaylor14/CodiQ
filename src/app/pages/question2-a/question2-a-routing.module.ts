import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Question2APage } from './question2-a.page';

const routes: Routes = [
  {
    path: '',
    component: Question2APage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Question2APageRoutingModule {}
