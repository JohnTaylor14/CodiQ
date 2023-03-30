import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Question4APageRoutingModule } from './question4-a-routing.module';

import { Question4APage } from './question4-a.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Question4APageRoutingModule
  ],
  declarations: [Question4APage]
})
export class Question4APageModule {}
