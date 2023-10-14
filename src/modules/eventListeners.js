import { select } from './selectors.js';

export const on = (type, el, listener, all = false) => {
  let selectEl = select(el, all);
  if (selectEl) {
    if (all) {
      selectEl.forEach((e) => e.addEventListener(type, listener));
    } else {
      selectEl.addEventListener(type, listener);
    }
  }
};

export const onscroll = (el, listener) => {
  el.addEventListener('scroll', listener);
};
