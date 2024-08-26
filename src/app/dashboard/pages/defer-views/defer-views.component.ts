import { Component } from '@angular/core';
import { HeavyLoadersSlowComponent } from '../../../shared/heavy-loaders/heavy-loaders-slow.component';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [HeavyLoadersSlowComponent, CommonModule],
  templateUrl: './defer-views.component.html',
  styles: ``
})
export default class DeferViewsComponent {

}
