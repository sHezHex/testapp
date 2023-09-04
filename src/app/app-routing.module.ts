import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'gatitos',
    pathMatch: 'full'
  },
  {
    path: 'gatitos',
    children: [
      {
        path: '',
        loadChildren: () => import('./gatitos/gatitos.module').then( m => m.GatitosPageModule)
      },
      {
        path: 'new-gatito',
        loadChildren: () => import('./gatitos/add-gatito/add-gatito.module').then(m => m.AddGatitoPageModule)
      },
      {
        path: ':gatitosId',
        loadChildren: () => import('./gatitos/gatitos-detail/gatitos-detail.module').then(m => m.GatitosDetailPageModule)
      }
    ]
  },
  {
    path: 'new-gatito',
    loadChildren: () => import('./gatitos/add-gatito/add-gatito.module').then(m => m.AddGatitoPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
