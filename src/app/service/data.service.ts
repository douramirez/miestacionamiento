import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private data: { direccion: string, precio: number, estado: string }[] = [];

  constructor() { }

  saveData(direccion: string, precio: number, estado: string) {
    this.data.push({ direccion, precio, estado });
  }

  getData() {
    return this.data;
  }
}