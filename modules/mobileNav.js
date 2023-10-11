import { on } from './eventListeners.js';
import { select } from './selectors.js';

export const initMobileNav = () => {
  const body = select('body');
  const mobileNavToggle = select('.mobile-nav-toggle');
  on('click', '.mobile-nav-toggle', function (e) {
    body.classList.toggle('mobile-nav-active');
    mobileNavToggle.classList.toggle('fa-bars');
    mobileNavToggle.classList.toggle('fa-times');
  });
};

export const closeMobileNav = () => {
  const body = select('body');
  const mobileNavToggle = select('.mobile-nav-toggle');

  on('click', '#navbar .scrollto', function () {
    body.classList.remove('mobile-nav-active');
    mobileNavToggle.classList.remove('fa-times');
    mobileNavToggle.classList.add('fa-bars');
  });
};
