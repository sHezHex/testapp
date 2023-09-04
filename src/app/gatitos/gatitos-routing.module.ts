import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GatitosPage } from './gatitos.page';

const routes: Routes = [
  {
    path: '',
    component: GatitosPage
  },
  {
    path: 'add-gatito',
    loadChildren: () => import('./add-gatito/add-gatito.module').then( m => m.AddGatitoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GatitosPageRoutingModule {}
