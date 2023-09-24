import { environmentBase } from './environment.base';
import { IEnvironment } from '@dead/xplat/core';
import { environmentProd } from '@dead/xplat/environments';

export const environment: IEnvironment = environmentBase(environmentProd, {
  // app level customizations here...
});