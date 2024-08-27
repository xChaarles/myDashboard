import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TitleComponent } from '../../../shared/title/title.component';

@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent],
  template:`
  
  <app-title title="Ver Transicion 2" />
    <section  class="flex justify-end">
      <img srcset="https://picsum.photos/seed/picsum/200/300" 
      alt="Picsum"
      width="200"
      height="300"
      style="view-transition-name: img1;"
      />
      

      <div class="fixed bottom-16 right-10 bg-blue-800 w-32 h-32 rounded"
      style="view-transition-name: img2;"></div>

    </section>
  ` 
})
export default class ViewTransition2Component {

}