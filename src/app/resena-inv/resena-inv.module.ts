import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResenaInvPageRoutingModule } from './resena-inv-routing.module';

import { ResenaInvPage } from './resena-inv.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResenaInvPageRoutingModule
  ],
  declarations: [ResenaInvPage]
})
export class ResenaInvPageModule {}
