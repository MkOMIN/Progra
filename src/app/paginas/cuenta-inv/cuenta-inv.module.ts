import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CuentaInvPageRoutingModule } from './cuenta-inv-routing.module';

import { CuentaInvPage } from './cuenta-inv.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CuentaInvPageRoutingModule
  ],
  declarations: [CuentaInvPage]
})
export class CuentaInvPageModule {}
