import { browserDeeplink } from '../src';

browserDeeplink('tg://').then(() => {
  console.log('installed');
}).catch(() => {
  console.log('not installed');
});
