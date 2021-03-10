import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MinumPageRoutingModule } from './minum-routing.module';

import { MinumPage } from './minum.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MinumPageRoutingModule
  ],
  declarations: [MinumPage]
})
export class MinumPageModule {}
