import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Question2APageRoutingModule } from './question2-a-routing.module';

import { Question2APage } from './question2-a.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Question2APageRoutingModule
  ],
  declarations: [Question2APage]
})
export class Question2APageModule {}
