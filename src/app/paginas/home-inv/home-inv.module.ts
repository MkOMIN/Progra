import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeInvPageRoutingModule } from './home-inv-routing.module';

import { HomeInvPage } from './home-inv.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeInvPageRoutingModule
  ],
  declarations: [HomeInvPage]
})
export class HomeInvPageModule {}
