import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';
  rockBands = ["ACDC", "Nirvana", "Metallica", "Guns n roses"];


  changeTitle() {
    this.title = "Nuevo título";
  }

  verCantidadBandas(): number {
    return this.rockBands.length;
  }
}
