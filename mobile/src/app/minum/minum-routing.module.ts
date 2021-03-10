import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MinumPage } from './minum.page';

const routes: Routes = [
  {
    path: '',
    component: MinumPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MinumPageRoutingModule {}
