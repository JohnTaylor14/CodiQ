import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Question4APage } from './question4-a.page';

const routes: Routes = [
  {
    path: '',
    component: Question4APage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Question4APageRoutingModule {}
