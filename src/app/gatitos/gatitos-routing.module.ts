import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GatitosPage } from './gatitos.page';

const routes: Routes = [
  {
    path: '',
    component: GatitosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GatitosPageRoutingModule {}
