import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-sidemeu',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>sidemeu works!</p>`,
  styleUrl: './sidemeu.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidemeuComponent { }
