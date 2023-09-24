import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { fetchDetailRouteImage } from '@dead/xplat/core';

@Component({
  selector: 'dead-detail',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  host: {
    class: 'bg-black',
  },
  template: `
    <img
      [alt]="image | async"
      [ngSrc]="image | async"
      class="w-full h-full object-contain bg-black"
      fill
      priority
    />
  `,
})
export class DetailComponent {
  image = fetchDetailRouteImage();
}








