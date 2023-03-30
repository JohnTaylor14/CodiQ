import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AssuntoPageRoutingModule } from './assunto-routing.module';

import { AssuntoPage } from './assunto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AssuntoPageRoutingModule
  ],
  declarations: [AssuntoPage]
})
export class AssuntoPageModule {}
