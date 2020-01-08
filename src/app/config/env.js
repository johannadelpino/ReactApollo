import { devConfig } from './env-dev';
import { prodConfig } from './env-prod';

export const appConfig =
  process && process.env && process.env.NODE_ENV
    ? { ...prodConfig }
    : { ...devConfig };
