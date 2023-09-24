import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from '@nativescript/angular';

import { SharedModule } from '../shared/shared.module';
import { DETAIL_COMPONENTS, DetailComponent } from './components';

export const routes: Routes = [
  {
    path: '',
    component: DetailComponent,
  },
];

@NgModule({
  imports: [SharedModule, NativeScriptRouterModule.forChild(routes)],
  declarations: [...DETAIL_COMPONENTS],
  exports: [...DETAIL_COMPONENTS],
  schemas: [NO_ERRORS_SCHEMA],
})
export class DetailModule {}
