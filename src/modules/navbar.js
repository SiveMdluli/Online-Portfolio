import { on, onscroll } from './eventListeners.js';
import { select } from './selectors.js';
import { closeMobileNav } from './mobileNav.js';

export const navbarlinks = select('#navbar .scrollto', true);

export const navbarlinksActive = () => {
  let position = window.scrollY + 200;
  navbarlinks.forEach((navbarlink) => {
    if (!navbarlink.hash) return;
    let section = select(navbarlink.hash);
    if (!section) return;
    if (
      position >= section.offsetTop &&
      position <= section.offsetTop + section.offsetHeight
    ) {
      navbarlink.classList.add('active');
    } else {
      navbarlink.classList.remove('active');
    }
  });
};

export const initNavbar = () => {
  window.addEventListener('load', navbarlinksActive);
  onscroll(document, navbarlinksActive);
  closeMobileNav();
};
