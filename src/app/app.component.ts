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

  changeTitle() {
    this.title = "Nuevo título";
  }

  verCantidadBandas(): number {
    return this.rockBands.length;
  }

  agregarNuevaBanda() {
    this.rockBands.push(this.rockBandName);
    this.rockBandName = "";
  }
}
