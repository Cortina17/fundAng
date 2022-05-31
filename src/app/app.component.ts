import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';
  rockBands = ["AC/DC", "Nirvana", "Metallica", "Guns 'N' roses", "Iron Maiden", "El Canto del Loco"];

  changeTitle() {
    this.title = "Nuevo título";
  }

  verCantidadBandas(): number {
    return this.rockBands.length;
  }
}
