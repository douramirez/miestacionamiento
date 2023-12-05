import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
declare var google: any;

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements AfterViewInit {
  @ViewChild('map', { static: false }) mapElement!: ElementRef;

  constructor() { }

  ngAfterViewInit() {
    const map = new google.maps.Map(this.mapElement.nativeElement, {
      center: { lat: -33.5151301, lng: -70.7209969 },
      zoom: 16
    });
  }
}