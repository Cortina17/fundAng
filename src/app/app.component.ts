import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';

  rockBands = ["AC/DC", "Nirvana", "Metallica", "Guns 'N' roses", "Iron Maiden"];

  rockBandName = "";

  seleccion = "KIA";
  seleccion2 = "Audi";


  changeTitle() {
    this.title = "Nuevo título generado por componentes de angular que estan muy chachis";
  }

  verCantidadBandas(): number {
    return this.rockBands.length;
  }

  agregarNuevaBanda() {
    this.rockBands.push(this.rockBandName);
    this.rockBandName = "";
  }
}
