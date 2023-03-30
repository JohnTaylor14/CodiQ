import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Question3APageRoutingModule } from './question3-a-routing.module';

import { Question3APage } from './question3-a.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Question3APageRoutingModule
  ],
  declarations: [Question3APage]
})
export class Question3APageModule {}
