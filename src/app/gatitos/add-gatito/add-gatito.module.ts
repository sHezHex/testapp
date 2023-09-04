import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddGatitoPageRoutingModule } from './add-gatito-routing.module';

import { AddGatitoPage } from './add-gatito.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddGatitoPageRoutingModule
  ],
  declarations: [AddGatitoPage]
})
export class AddGatitoPageModule {}
