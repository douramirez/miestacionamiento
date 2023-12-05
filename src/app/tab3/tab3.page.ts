import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor() {}

  historial = [
    { nombre: 'Juanito Lopez',direccion: 'Maipu', precio: 3700, estado: 'Realizado' },
    { nombre: 'Constanza Perez',direccion: 'Cerrilos', precio: 4200, estado: 'En proceso' },
    // Agrega más objetos aquí
  ];

}
