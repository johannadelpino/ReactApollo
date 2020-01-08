import { devConfig } from './dev';
import { prodConfig } from './prod';

export const appConfig =
  process &&
  process.env &&
  process.env.NODE_ENV &&
  process.env.NODE_ENV === 'production'
    ? { ...prodConfig }
    : { ...devConfig };
