function injectIframe(src) {
  const iframe = document.createElement('iframe');
  iframe.src = src;
  document.body.appendChild(iframe);
  iframe.style.width = '1px';
  iframe.style.height = '1px';
  iframe.style.position = 'fixed';
  iframe.style.left = '-1px';

  return iframe;
}

function ejectIframe(iframe) {
  document.body.removeChild(iframe);
}

export function browserDeeplink(appLink, options = {
  waitTimeout: 200
}) {
  const { waitTimeout } = options;

  return new Promise(((resolve, reject) => {
    const iframe = injectIframe(appLink);
    const timeout = setTimeout(() => {
      window.removeEventListener('blur', windowBlurListener);
      ejectIframe(iframe);
      reject(Error(`Can't open ${appLink}`));
    }, waitTimeout);

    function windowBlurListener() {
      window.removeEventListener('blur', windowBlurListener);
      clearTimeout(timeout);
      ejectIframe(iframe);
      resolve();
    }

    window.addEventListener('blur', windowBlurListener);
  }));
}
