# browser-deeplink

Tiny function to open application from browser. Resolves if the application was requested to open.

```js
import { browserDeeplink } from '@macpaw/browser-deeplink';

browserDeeplink('cleanmymac://signin?email=1%401.com&src=dashboard')
  .then(() => {
    console.log('application is requested to open');
  })
  .catch(() => {
    console.log('application is not installed');
  });
```
