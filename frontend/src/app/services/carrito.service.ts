import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  constructor() {
  }

  public agregarProducto(producto: any): void {
    // Agrega el producto al carrito
  }
  // Agrega el método getProductos()
  public getProductos(): any[] {
    return [];
  }

}