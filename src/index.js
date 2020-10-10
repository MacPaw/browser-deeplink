function injectIframe(src) {
  const iframe = document.createElement('iframe');
  iframe.src = src;
  document.body.appendChild(iframe);
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
      clearTimeout(timeout);
      resolve();
    }

    window.addEventListener('blur', windowBlurListener);
  }));
}
