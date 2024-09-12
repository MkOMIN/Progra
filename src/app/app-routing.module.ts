import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./paginas/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./paginas/login/login.module').then( m => m.LoginPageModule)
  },  {
    path: 'crear',
    loadChildren: () => import('./paginas/crear/crear.module').then( m => m.CrearPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./paginas/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'cuenta',
    loadChildren: () => import('./paginas/cuenta/cuenta.module').then( m => m.CuentaPageModule)
  },
  {
    path: 'cuenta',
    loadChildren: () => import('./paginas/cuenta/cuenta.module').then( m => m.CuentaPageModule)
  },
  {
    path: 'resena',
    loadChildren: () => import('./paginas/resena/resena.module').then( m => m.ResenaPageModule)
  },
  {
    path: 'home-inv',
    loadChildren: () => import('./paginas/home-inv/home-inv.module').then( m => m.HomeInvPageModule)
  },
  {
    path: 'cuenta-inv',
    loadChildren: () => import('./paginas/cuenta-inv/cuenta-inv.module').then( m => m.CuentaInvPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
