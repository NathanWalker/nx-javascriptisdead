// angular
import { Injectable, Inject, ViewContainerRef, inject } from '@angular/core';

// app
import { isObject, isNativeScript } from '@dead/xplat/utils';
import { PlatformWindowToken } from './tokens';

@Injectable({
  providedIn: 'root',
})
export class WindowService {
  private _platformWindow = inject(PlatformWindowToken);

  public get navigator() {
    return this._platformWindow.navigator;
  }

  public get location() {
    return this._platformWindow.location;
  }

  public get process() {
    return this._platformWindow.process;
  }

  public get require() {
    return this._platformWindow.require;
  }

  public alert(msg: any): Promise<void> {
    return new Promise((resolve, reject) => {
      const result: any = this._platformWindow.alert(msg);
      if (isObject(result) && result.then) {
        // console.log('WindowService -- using result.then promise');
        result.then(resolve, reject);
      } else {
        resolve();
      }
    });
  }

  public confirm(
    msg: any,
    action?: Function /* used for fancyalerts on mobile*/
  ): Promise<boolean> {
    return new Promise((resolve, reject) => {
      const result: any = (<any>this._platformWindow).confirm(
        msg,
        isNativeScript() ? action : undefined
      );
      if (isObject(result) && result.then) {
        result.then(resolve, reject);
      } else if (result) {
        resolve(true);
      } else {
        reject();
      }
    });
  }

  public setTimeout(
    handler: (...args: any[]) => void,
    timeout?: number
  ): number {
    return this._platformWindow.setTimeout(handler, timeout);
  }

  public clearTimeout(timeoutId: number): void {
    return this._platformWindow.clearTimeout(timeoutId);
  }

  public setInterval(
    handler: (...args: any[]) => void,
    ms?: number,
    ...args: any[]
  ): number {
    return this._platformWindow.setInterval(handler, ms, args);
  }

  public clearInterval(intervalId: number): void {
    return this._platformWindow.clearInterval(intervalId);
  }
}
