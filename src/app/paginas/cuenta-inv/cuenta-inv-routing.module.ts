import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CuentaInvPage } from './cuenta-inv.page';

const routes: Routes = [
  {
    path: '',
    component: CuentaInvPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CuentaInvPageRoutingModule {}
