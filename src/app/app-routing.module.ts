import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canActivate:[AuthGuard]
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
  },
  {
    path: 'crear',
    loadChildren: () => import('./paginas/crear/crear.module').then( m => m.CrearPageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'registro',
    loadChildren: () => import('./paginas/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'cuenta',
    loadChildren: () => import('./paginas/cuenta/cuenta.module').then( m => m.CuentaPageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'cuenta',
    loadChildren: () => import('./paginas/cuenta/cuenta.module').then( m => m.CuentaPageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'resena',
    loadChildren: () => import('./paginas/resena/resena.module').then( m => m.ResenaPageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'home-inv',
    loadChildren: () => import('./paginas/home-inv/home-inv.module').then( m => m.HomeInvPageModule)
  },
  {
    path: 'cuenta-inv',
    loadChildren: () => import('./paginas/cuenta-inv/cuenta-inv.module').then( m => m.CuentaInvPageModule)
  },
  {
    path: 'resena-inv',
    loadChildren: () => import('./resena-inv/resena-inv.module').then( m => m.ResenaInvPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
