import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Question1APageRoutingModule } from './question1-a-routing.module';

import { Question1APage } from './question1-a.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Question1APageRoutingModule
  ],
  declarations: [Question1APage]
})
export class Question1APageModule {}
