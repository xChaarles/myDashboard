import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-heavy-loaders-slow',
  standalone: true,
  imports: [CommonModule],
  template: `<section [ngClass]="['w-full h-[300px]', cssClass]">
    Heavy Loaders slow
  </section>`,
})
export class HeavyLoadersSlowComponent { 

  @Input({required: true}) cssClass!: string;

  constructor(){
      const star = Date.now();
      while (Date.now() - star < 3000 );
  }
}
