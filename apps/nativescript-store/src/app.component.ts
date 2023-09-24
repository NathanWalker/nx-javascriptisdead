import { Component } from '@angular/core';
import { AppService } from '@dead/xplat/nativescript/core';
import { AppBaseComponent } from '@dead/xplat/nativescript/features';

@Component({
  selector: 'dead-root',
  template: `
    <GridLayout>
      <page-router-outlet></page-router-outlet>
    </GridLayout>
  `,
})
export class AppComponent extends AppBaseComponent {
  constructor(appService: AppService) {
    super(appService);
  }
}
