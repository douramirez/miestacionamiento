import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConfirmarArriendoModalPage } from '../confirmar-arriendo-modal/confirmar-arriendo-modal.page';
declare var google: any;

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements AfterViewInit {
  @ViewChild('map' , { static: false }) mapElement!: ElementRef;

  showList = false;

  estacionamientos = [
    { lat: -33.5125494, lng: -70.7193755, info: "Duoc Uc Plaza Oeste",imageUrl: "https://blog.elroble.com/hubfs/2021/BLOG/3.%20%C2%BFCarro%20estacionado%20por%20mucho%20tiempo%3F%20-%20No%20pases%20por%20alto%20estos%20cuidados.jpg#keepProtocol", showButtons: false},
    { lat: -33.5132113, lng: -33.5132113, info: "Av. Maipu 563" , imageUrl: "https://blog.elroble.com/hubfs/2021/BLOG/3.%20%C2%BFCarro%20estacionado%20por%20mucho%20tiempo%3F%20-%20No%20pases%20por%20alto%20estos%20cuidados.jpg#keepProtocol", showButtons: false},
    { lat: -33.5132113, lng: -33.5132113, info: "Av. lonquen 920" , imageUrl: "https://blog.elroble.com/hubfs/2021/BLOG/3.%20%C2%BFCarro%20estacionado%20por%20mucho%20tiempo%3F%20-%20No%20pases%20por%20alto%20estos%20cuidados.jpg#keepProtocol", showButtons: false},
    { lat: -33.5132113, lng: -33.5132113, info: "Maipu 927" , imageUrl: "https://blog.elroble.com/hubfs/2021/BLOG/3.%20%C2%BFCarro%20estacionado%20por%20mucho%20tiempo%3F%20-%20No%20pases%20por%20alto%20estos%20cuidados.jpg#keepProtocol", showButtons: false},
    // Añade más estacionamientos aquí
  ];

  constructor(private modalController: ModalController)  { 
    this.estacionamientos = this.estacionamientos.map(estacionamiento => ({
      ...estacionamiento,
      showButtons: false
    }));
  }

  ngAfterViewInit() {
    const map = new google.maps.Map(this.mapElement.nativeElement, {
      center: { lat: -33.5151301, lng: -70.7209969 },
      zoom: 16,
      disableDefaultUI: true, // Desactiva la interfaz de usuario predeterminada
      zoomControl: false, // Desactiva el control de zoom
    });
  
    const markers = [
      { lat: -33.5151301, lng: -70.7209969, info: "Duoc Uc Plaza Oeste" },
      { lat: -33.5151032, lng: -70.7200877 , info: "Estacionamiento Disponible"},
      { lat: -33.5128848, lng: -70.7191703, info: "Estacionamiento Disponible" },
      { lat: -33.5125494, lng: -70.7193755, info: "Estacionamiento Disponible" },
      { lat: -33.5132113, lng: -33.5132113, info: "Estacionamiento Disponible" },
      // Añade más coordenadas aquí
    ]
    
    markers.forEach((marker, i) => {
      const mapMarker = new google.maps.Marker({
        position: marker,
        map: map,
      });
    
      const infoWindow = new google.maps.InfoWindow({
        content: marker.info, // Usa la propiedad info del marcador para el contenido de la ventana de información
      });
    
      mapMarker.addListener("click", () => {
        infoWindow.open(map, mapMarker);
      });
    });  
  }

  toggleList() {
    this.showList = !this.showList;
  }

  async arrendarEstacionamiento(estacionamiento:any) {
    const modal = await this.modalController.create({
      component: ConfirmarArriendoModalPage,
      componentProps: {
        'estacionamiento': estacionamiento
      }
    });
    return await modal.present();
  }


}