import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GorengPage } from './goreng.page';

const routes: Routes = [
  {
    path: '',
    component: GorengPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GorengPageRoutingModule {}
