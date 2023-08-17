import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ferreteria } from '../models/Ferreteria';  // Asegúrate de importar el modelo adecuado

@Injectable({
  providedIn: 'root'
})

export class FerreteriaService {
  URL_API = 'http://127.0.0.1:8000/';
  Ferreteria: Ferreteria[] = [];
  selectedProducto: Ferreteria = {
    codigo: 0,
    nombre: "",
    marca: "",
    stock: 0,
    precio: 0.0
  };
  update: boolean = false;

  constructor(private http: HttpClient) { }

  getAllProductos() {
    return this.http.get<Ferreteria[]>(this.URL_API + 'productos');
  }

  agregarProducto(producto: Ferreteria) {
    return this.http.post(this.URL_API + 'insertar', producto);
  }

  eliminarProducto(codigo: number) {
    return this.http.delete(this.URL_API + 'eliminar/' + codigo);
  }

  actualizarProducto(producto: Ferreteria) {
    return this.http.put(this.URL_API + 'actualizar/' + producto.codigo, producto);
  }
}

