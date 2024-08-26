import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TitleComponent } from '../../../shared/title/title.component';

@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent],
  template: `
  
    <app-title title="Ver Transicion 1" />
    <section  class="flex justify-start">
      <img srcset="https://picsum.photos/seed/picsum/200/300" 
      alt="Picsum"
      width="200"
      height="300"
      style="view-transition-name: img1;"
      />

      <div 
      class="bg-blue-500 w-56 h-56"
      style="view-transition-name: img2;"></div>

    </section>
  `
})
export default class ViewTransition1Component {

}
