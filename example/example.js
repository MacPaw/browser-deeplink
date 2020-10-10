import { browserDeeplink } from '../src/index.js';

const links = Array.from(document.querySelectorAll('#existing-app, #not-existing-app'));

links.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    browserDeeplink(event.target.href).then(() => {
      console.log('installed');
    }).catch(() => {
      console.log('not installed');
    });
  });
});
