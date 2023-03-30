import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IconePage } from './icone.page';

const routes: Routes = [
  {
    path: '',
    component: IconePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IconePageRoutingModule {}
