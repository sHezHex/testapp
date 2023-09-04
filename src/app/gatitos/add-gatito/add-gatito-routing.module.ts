import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddGatitoPage } from './add-gatito.page';

const routes: Routes = [
  {
    path: '',
    component: AddGatitoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddGatitoPageRoutingModule {}
