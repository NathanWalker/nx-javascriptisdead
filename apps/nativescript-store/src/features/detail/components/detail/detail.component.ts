import { Component, inject } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';
import { fetchDetailRouteImage } from '@dead/xplat/core';
import { CoreTypes, Page, SharedTransition, View } from '@nativescript/core';

@Component({
  template: `<GridLayout class="bg-black">
    <ImageCacheIt
      [src]="image | async"
      [sharedTransitionTag]="image | async"
      transition="fade"
      stretch="aspectFit"
      class="rounded-lg w-full h-full"
      (loaded)="loadedCache($event)"
    />
    <ImageZoom
      [src]="image | async"
      transition="fade"
      stretch="aspectFit"
      class="rounded-lg w-full h-full"
      maxZoom="5" 
      visibility="hidden"
      (loaded)="loadedZoom($event)"
    />
    <Button
      class="fa text-2xl text-white ml-2 mt-2 align-top text-left"
      (tap)="back()"
      >{{ 'fa-close' | fonticon }}</Button
    >
  </GridLayout> `,
})
export class DetailComponent {
  image = fetchDetailRouteImage();
  router = inject(RouterExtensions);
  page = inject(Page);
  cachedImage: View;
  zoomImage: View;

  constructor() {
    this.page.actionBarHidden = true;
    SharedTransition.events().on(SharedTransition.finishedEvent, (event) => {
      if (event.data.action === 'present') {
        if (this.cachedImage && this.zoomImage) {
          this.zoomImage.visibility = CoreTypes.Visibility.visible;
          this.cachedImage.visibility = CoreTypes.Visibility.hidden;
        }
      }
    });
  }

  back() {
    if (this.cachedImage && this.zoomImage) {
      this.zoomImage.visibility = CoreTypes.Visibility.hidden;
      this.cachedImage.visibility = CoreTypes.Visibility.visible;
    }
    this.router.back();
  }

  loadedCache(args) {
    this.cachedImage = args.object;
  }

  loadedZoom(args) {
    this.zoomImage = args.object;
  }
}
