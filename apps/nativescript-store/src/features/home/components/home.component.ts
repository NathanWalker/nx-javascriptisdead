import { Component, inject } from '@angular/core';
import { ObservableArray, PageTransition, SharedTransition, isAndroid } from '@nativescript/core';
import { CollectionViewItemEventData } from '@nativescript-community/ui-collectionview';
import { DeadService } from '@dead/xplat/core';
import { RouterExtensions } from '@nativescript/angular';

@Component({
  template: `<ActionBar title="Nx + NativeScript with xplat" />
    <GridLayout class="pr-2">
      <CollectionView
        [items]="images"
        colWidth="50%"
        rowHeight="192"
        scrollBarIndicatorVisible="false"
        (itemTap)="itemTap($event)"
        iosOverflowSafeArea="true"
      >
        <ng-template let-image="item">
          <GridLayout class="pl-2 pt-2">
            <ImageCacheIt
              [src]="image"
              [sharedTransitionTag]="image"
              transition="fade"
              stretch="aspectFit"
              class="rounded-lg w-full h-full"
            />
          </GridLayout>
        </ng-template>
      </CollectionView>
    </GridLayout> `,
})
export class HomeComponent {
  deadService = inject(DeadService);
  router = inject(RouterExtensions);
  images = new ObservableArray(this.deadService.images);

  itemTap(args: CollectionViewItemEventData) {
    this.router.navigate(['/detail', args.index], {
      transition: SharedTransition.custom(new PageTransition(), {
        pageStart: {
          x: 0,
          y: 0
        },
        pageEnd: {
          duration: isAndroid ? 300 : null,
        },
        pageReturn: {
          duration: isAndroid ? 150 : null,
          x: 0,
          y: 0
        }
      })
    });
  }
}
