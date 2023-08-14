import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GatitosPageRoutingModule } from './gatitos-routing.module';

import { GatitosPage } from './gatitos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GatitosPageRoutingModule
  ],
  declarations: [GatitosPage]
})
export class GatitosPageModule {}
