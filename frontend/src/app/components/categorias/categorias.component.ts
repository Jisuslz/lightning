import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';
import { CarritoService } from 'src/app/services/carrito.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css'],
  providers: [CarritoService] // Provide the CarritoService class
})
export class CategoriasComponent implements OnInit {
  productos: any;

  constructor(
    private productosService: ProductosService,
    private carritoService: CarritoService
  ) {}

  ngOnInit(): void {
    this.productosService.getAll().subscribe((p) => {
      this.productos = p;
    });
  }

  create(): void {
    this.productosService.post().subscribe(
      (response) => {
        console.log('Respuesta del servidor:', response);
      },
      (error) => {
        console.log('Error en la solicitud POST:', error);
      }
    );
  }

  agregarCarrito(producto: any): void {
    // Agrega el producto al carrito
    //this.carritoService.agregarProducto(producto);
  }
}