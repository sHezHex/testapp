import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GatitosDetailPageRoutingModule } from './gatitos-detail-routing.module';

import { GatitosDetailPage } from './gatitos-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GatitosDetailPageRoutingModule
  ],
  declarations: [GatitosDetailPage]
})
export class GatitosDetailPageModule {}
