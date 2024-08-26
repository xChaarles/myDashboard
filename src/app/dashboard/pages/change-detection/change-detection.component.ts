import { CommonModule, TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { TitleComponent } from '../../../shared/title/title.component';

@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent],
  template:`
    <app-title title="Deteccion de Cambios"></app-title>
  `
})
export default class ChangeDetectionComponent {

}
