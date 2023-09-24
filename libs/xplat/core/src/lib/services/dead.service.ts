import { Injectable } from '@angular/core';
import { isNativeScript } from '@dead/xplat/utils';

@Injectable({
  providedIn: 'root',
})
export class DeadService {
  imageBaseUrl = `https://deathbyjavascript.com/img`;

  get images() {
    return Array.from({length: 226}, (x, i) => `${this.imageBaseUrl}/${i}.${isNativeScript() ? 'jpg' : 'webp'}`).slice(1);
  }
}
