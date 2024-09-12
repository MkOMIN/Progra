import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeInvPage } from './home-inv.page';

const routes: Routes = [
  {
    path: '',
    component: HomeInvPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeInvPageRoutingModule {}
