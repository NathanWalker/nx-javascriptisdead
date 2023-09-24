import { Component, inject } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { DeadService } from '@dead/xplat/core';
import { ActivatedRoute } from '@angular/router';
import { map, take } from 'rxjs';

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
  deadService = inject(DeadService);
  image = inject(ActivatedRoute).params.pipe(take(1), map(p => this.deadService.images[+p['id']]));
}
