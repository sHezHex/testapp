import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GatitosDetailPage } from './gatitos-detail.page';

const routes: Routes = [
  {
    path: '',
    component: GatitosDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GatitosDetailPageRoutingModule {}
