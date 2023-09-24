import { Component } from '@angular/core';
import { DetailComponent } from './detail.component';

@Component({
  standalone: true,
  imports: [DetailComponent],
  template: ` <dead-detail /> `,
})
export default class DetailPage {}
