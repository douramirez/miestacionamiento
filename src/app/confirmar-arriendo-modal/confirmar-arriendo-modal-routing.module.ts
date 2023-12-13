import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmarArriendoModalPage } from './confirmar-arriendo-modal.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmarArriendoModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmarArriendoModalPageRoutingModule {}
