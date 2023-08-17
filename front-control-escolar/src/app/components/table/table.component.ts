import { Component } from '@angular/core';
import { FerreteriaService } from 'src/app/services/ferreterria.service';
import { Ferreteria } from 'src/app/models/Ferreteria';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  constructor(public ferreteriaService: FerreteriaService) {}

  ngOnInit() {
    this.getAllProductos();
  }

  getAllProductos() {
    this.ferreteriaService.getAllProductos().subscribe(
      res => {
        this.ferreteriaService.Ferreteria = res;
        console.log(res);
      },
      err => console.error(err)
    );
  }

  eliminarProducto(codigo: number) {
    this.ferreteriaService.eliminarProducto(codigo).subscribe(
      res => this.getAllProductos(),
      err => console.error(err)
    );
  }

  getProducto(producto: Ferreteria) {
    this.ferreteriaService.selectedProducto = producto;
    this.ferreteriaService.update = true;
  }
}
