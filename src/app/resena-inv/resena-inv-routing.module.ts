import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResenaInvPage } from './resena-inv.page';

const routes: Routes = [
  {
    path: '',
    component: ResenaInvPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResenaInvPageRoutingModule {}
