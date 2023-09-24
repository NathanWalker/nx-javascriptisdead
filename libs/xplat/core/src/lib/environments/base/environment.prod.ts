import { IEnvironment } from '@dead/xplat/core';
import { deepMerge } from '@dead/xplat/utils';
import { environmentBase } from './environment.base';

export const environmentProd = deepMerge(environmentBase, <IEnvironment>{
  production: true,
  // customizations here...
});
