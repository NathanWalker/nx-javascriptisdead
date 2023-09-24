import { Component } from '@angular/core';

import { DeadStoreComponent } from './dead-store.component';

@Component({
  selector: 'web-store-home',
  standalone: true,
  imports: [DeadStoreComponent],
  template: ` <dead-store /> `,
})
export default class HomeComponent {}
