import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IconePageRoutingModule } from './icone-routing.module';

import { IconePage } from './icone.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IconePageRoutingModule
  ],
  declarations: [IconePage]
})
export class IconePageModule {}
