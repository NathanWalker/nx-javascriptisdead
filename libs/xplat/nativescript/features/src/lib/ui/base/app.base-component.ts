import { Directive } from '@angular/core';

// libs
import { BaseComponent } from '@dead/xplat/core';
import { AppService } from '@dead/xplat/nativescript/core';
import { registerElement } from '@nativescript/angular';
import { ImageZoom } from '@triniwiz/nativescript-image-zoom';
registerElement('ImageZoom', () => ImageZoom);

@Directive()
export abstract class AppBaseComponent extends BaseComponent {
  constructor(protected appService: AppService) {
    super();
  }
}
