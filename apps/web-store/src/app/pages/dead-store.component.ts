import { Component, inject } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { DeadService } from '@dead/xplat/core';

@Component({
  selector: 'dead-store',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  host: {
    class: 'grid grid-cols-4 gap-2 p-4 bg-[#f7f5ee]',
  },
  template: `
    <div>
      <div class="text-xl mb-6">
        <a
          href="https://nx.dev/"
          class="font-bold"
          target="_blank"
          rel="noopener"
          >Nx</a
        >
        +<br /><a
          href="https://analogjs.org/"
          class="font-bold"
          target="_blank"
          rel="noopener"
          >Analog</a
        >
        with<br /><a
          href="https://github.com/nstudio/xplat"
          class="font-bold"
          target="_blank"
          rel="noopener"
          >xplat</a
        >
      </div>
      <a
        href="https://github.com/NathanWalker/nx-javascript-is-dead"
        class="font-bold"
        target="_blank"
        rel="noopener"
        >Source code</a
      >
      <div>
        Inspired by
        <a
          href="https://deathbyjavascript.com"
          class="font-bold"
          target="_blank"
          rel="noopener"
          >Death by JavaScript</a
        >
      </div>
    </div>

    <div *ngFor="let image of deadService.images">
      <img
        [alt]="image"
        [ngSrc]="image"
        width="300"
        height="300"
        class="rounded-lg hover:scale-95 ease-in-out duration-300"
      />
    </div>
  `,
})
export class DeadStoreComponent {
  deadService = inject(DeadService);
}
