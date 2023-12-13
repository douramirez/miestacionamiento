import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DataService } from '../service/data.service';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-confirmar-arriendo-modal',
  templateUrl: './confirmar-arriendo-modal.page.html',
  styleUrls: ['./confirmar-arriendo-modal.page.scss'],
})
export class ConfirmarArriendoModalPage implements OnInit {
  @Input() estacionamiento: any;

  valorArriendo: number = 5000; // Reemplaza 0 con el valor real
  tarifa: number = 500; // Reemplaza 0 con el valor real
  total: number = 5500

  constructor(private modalController: ModalController, private dataService: DataService,  private alertController :AlertController) { }

  ngOnInit() {
  }

  confirmar() {
    this.dataService.saveData(this.estacionamiento.info, this.total, 'Arrendado');
    this.presentAlert();
    this.modalController.dismiss();
  }

  async closeModal() {
    await this.modalController.dismiss();
  }


  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Confirmado',
      message: 'Arriendo confirmado.',
      buttons: ['OK']
    });
  
    await alert.present();
  }

}
