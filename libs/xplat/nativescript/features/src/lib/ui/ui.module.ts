import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { NativeScriptCommonModule, NativeScriptFormsModule, NativeScriptRouterModule } from '@nativescript/angular';
import { CollectionViewModule } from '@nativescript-community/ui-collectionview/angular';
import { ImageCacheItModule } from '@triniwiz/nativescript-image-cache-it/angular';
import { FontIconModule } from 'nativescript-fonticon/angular';
import { UISharedModule } from '@dead/xplat/features';
import { UI_COMPONENTS } from './components';

const MODULES = [
  NativeScriptCommonModule,
  NativeScriptFormsModule,
  NativeScriptRouterModule,
  FontIconModule,
  UISharedModule,
  CollectionViewModule,
  ImageCacheItModule
];

@NgModule({
  imports: [...MODULES],
  declarations: [...UI_COMPONENTS],
  exports: [...MODULES, ...UI_COMPONENTS],
  schemas: [NO_ERRORS_SCHEMA]
})
export class UIModule {}
