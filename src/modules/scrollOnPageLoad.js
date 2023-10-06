import { scrollto } from './scrolling.js';
import { select } from './selectors.js';

export const initScrollOnPageLoad = () => {
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash);
      }
    }
  });
};
