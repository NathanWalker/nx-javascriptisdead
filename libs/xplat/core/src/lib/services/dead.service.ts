import { Injectable, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { isNativeScript } from '@dead/xplat/utils';
import { map, take } from 'rxjs';

export function fetchDetailRouteImage() {
  const deadService = inject(DeadService);
  return inject(ActivatedRoute).params.pipe(
    take(1),
    map((p) => deadService.images[+p['id']])
  );
}

@Injectable({
  providedIn: 'root',
})
export class DeadService {
  imageBaseUrl = `https://deathbyjavascript.com/img`;

  get images() {
    return Array.from(
      { length: 226 },
      (x, i) => `${this.imageBaseUrl}/${i}.${isNativeScript() ? 'jpg' : 'webp'}`
    ).slice(1);
  }
}
