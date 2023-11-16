import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private productos:Array<any> = []
  constructor() {
  }

  // Agrega el método getProductos()
  public getProductos(): Array<any> {
    return this.productos;
  }

}