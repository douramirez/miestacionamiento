import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.page.html',
  styleUrls: ['./password.page.scss'],
})
export class PasswordPage implements OnInit {

  mostrarFormularioCodigo = false;
  verificarCodigo = false;
  constructor() { }

  ngOnInit() {
  }
  enviarCodigo() {
    if (this.mostrarFormularioCodigo) {
      this.verificarCodigo = true;
    } else {
      this.mostrarFormularioCodigo = true;
    }
    }

}
