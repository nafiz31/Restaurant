import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GorengPageRoutingModule } from './goreng-routing.module';

import { GorengPage } from './goreng.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GorengPageRoutingModule
  ],
  declarations: [GorengPage]
})
export class GorengPageModule {}
