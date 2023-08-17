import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FerreteriaService } from 'src/app/services/ferreterria.service';  // Asegúrate de importar el servicio correcto

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  constructor(public ferreteriaService: FerreteriaService) {}  // Usar el servicio FerreteriaService

  agregarProducto(form: NgForm) {  // Cambiar el nombre del método
    this.ferreteriaService.agregarProducto(form.value).subscribe(
      res => {
        this.ferreteriaService.getAllProductos().subscribe(
          res => {
            this.ferreteriaService.Ferreteria = res;
            console.log(res);
          },
          err => console.error(err)
        );
      },
      err => console.error(err)
    );
  }

  actualizarProducto(form: NgForm) {  // Cambiar el nombre del método
    this.ferreteriaService.actualizarProducto(form.value).subscribe(
      res => {
        this.ferreteriaService.update = false;
        form.reset();
        this.ferreteriaService.getAllProductos().subscribe(
          res => {
            this.ferreteriaService.Ferreteria = res;
            console.log(res);
          },
          err => console.error(err)
        );
      },
      err => console.error(err)
    );
  }
}
