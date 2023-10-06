//
import { select } from './selectors.js';

export const scrollto = (el) => {
  let elementPos = select(el).offsetTop;
  window.scrollTo({
    top: elementPos,
    behavior: 'smooth',
  });
};
