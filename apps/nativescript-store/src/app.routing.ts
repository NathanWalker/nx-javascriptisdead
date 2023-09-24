// angular
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

// nativescript
import { NativeScriptRouterModule } from '@nativescript/angular';

// app
import { SharedModule } from './features/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./features/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'detail/:id',
    loadChildren: () =>
      import('./features/detail/detail.module').then((m) => m.DetailModule),
  },
];

@NgModule({
  imports: [SharedModule, NativeScriptRouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
