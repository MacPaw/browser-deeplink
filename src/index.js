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

export function browserDeeplink(appLink, options = {}) {
  const { waitTimeout } = options;
  const WAIT_TIMEOUT = typeof (waitTimeout) === 'number' ? options.wait : 200;

  return new Promise(((resolve, reject) => {
    const iframe = injectIframe(appLink);
    const timeout = setTimeout(() => {
      window.removeEventListener('blur', windowBlurListener);
      ejectIframe(iframe);
      reject(Error(`Can't open ${appLink}`));
    }, WAIT_TIMEOUT);

    function windowBlurListener() {
      window.removeEventListener('blur', windowBlurListener);
      clearTimeout(timeout);
      ejectIframe(iframe);
      resolve();
    }

    window.addEventListener('blur', windowBlurListener);
  }));
}
