import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmarArriendoModalPageRoutingModule } from './confirmar-arriendo-modal-routing.module';

import { ConfirmarArriendoModalPage } from './confirmar-arriendo-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmarArriendoModalPageRoutingModule
  ],
  declarations: [ConfirmarArriendoModalPage]
})
export class ConfirmarArriendoModalPageModule {}
