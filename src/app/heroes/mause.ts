import { Component } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-',
  template: `
    <button
      (click)="onButtonClick()"
      (mousedown)="onMouseDown()"
      (mousemove)="onMouseMove()"
      (mouseout)="onMouseOut()"
      (mouseover)="onMouseOver()"
      (mouseup)="onMouseUp()"
    >
      Botón con eventos
    </button>
  `,
  styleUrls: ['./heroes.component.css']
})
export class BotonComponent {
  onButtonClick() {
    console.log('Se hizo clic en el botón');
  }

  onMouseDown() {
    console.log('Se presionó el botón del mouse');
  }

  onMouseMove() {
    console.log('El mouse se movió sobre el botón');
  }

  onMouseOut() {
    console.log('El mouse salió del área del botón');
  }

  onMouseOver() {
    console.log('El mouse está sobre el botón');
  }

  onMouseUp() {
    console.log('Se soltó el botón del mouse');
  }
}