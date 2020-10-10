import { browserDeeplink } from '../src/index.js';

browserDeeplink('tg://').then(() => {
  console.log('installed');
}).catch(() => {
  console.log('not installed');
});
