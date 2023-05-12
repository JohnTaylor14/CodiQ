import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TemaBPageRoutingModule } from './tema-b-routing.module';

import { TemaBPage } from './tema-b.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TemaBPageRoutingModule
  ],
  declarations: [TemaBPage]
})
export class TemaBPageModule {}
