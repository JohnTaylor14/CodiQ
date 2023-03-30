import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TemaAPageRoutingModule } from './tema-a-routing.module';

import { TemaAPage } from './tema-a.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TemaAPageRoutingModule
  ],
  declarations: [TemaAPage]
})
export class TemaAPageModule {}
