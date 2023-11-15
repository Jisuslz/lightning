import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';
import { CarritoService } from 'src/app/services/carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css'],
})
export class CarritoComponent implements OnInit {
  productos: any;
  total: any;

  constructor(
    private productosService: ProductosService,
    private carritoService: CarritoService
  ) {}

  ngOnInit(): void {
    this.productos = this.carritoService.getProductos();
  }
}