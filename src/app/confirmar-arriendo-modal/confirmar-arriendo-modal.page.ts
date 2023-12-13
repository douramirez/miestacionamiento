import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-confirmar-arriendo-modal',
  templateUrl: './confirmar-arriendo-modal.page.html',
  styleUrls: ['./confirmar-arriendo-modal.page.scss'],
})
export class ConfirmarArriendoModalPage implements OnInit {
  @Input() estacionamiento: any;

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  confirmar() {
    this.modalController.dismiss();
  }

}
