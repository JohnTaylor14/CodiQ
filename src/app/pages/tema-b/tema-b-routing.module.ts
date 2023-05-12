import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TemaBPage } from './tema-b.page';

const routes: Routes = [
  {
    path: '',
    component: TemaBPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TemaBPageRoutingModule {}
