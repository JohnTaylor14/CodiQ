import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResultadoAPageRoutingModule } from './resultado-a-routing.module';

import { ResultadoAPage } from './resultado-a.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResultadoAPageRoutingModule
  ],
  declarations: [ResultadoAPage]
})
export class ResultadoAPageModule {}
