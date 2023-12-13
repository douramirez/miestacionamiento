import { Component } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private dataService: DataService) {}

  historial: { direccion: string, precio: number, estado: string }[] = [];

  ngOnInit() {
    this.historial = this.dataService.getData();
  }

}
