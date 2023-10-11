import './style.css';
import { initNavbar, navbarlinks } from './modules/navbar.js';
import { initMobileNav } from './modules/mobileNav.js';
import { initScrollOnLinks } from './modules/scrollOnLinks.js';
import { initScrollOnPageLoad } from './modules/scrollOnPageLoad.js';
import { initTypedEffect } from './modules/typedEffect.js';
import { initSkillsAnimation } from './modules/skillsAnimation.js';
import { initPortfolio } from './modules/portfolio.js';
import { initLightbox } from './modules/lightbox.js';

import { initAnimationOnScroll } from './modules/animationOnScroll.js';
import { initPureCounter } from './modules/pureCounter.js';

// To ensure that it runs after the HTML document has fully loaded
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initMobileNav();
  initScrollOnLinks();
  initScrollOnPageLoad();
  initTypedEffect();
  initSkillsAnimation();
  initPortfolio();
  initLightbox();
  initPortfolioDetailsSlider();
  initAnimationOnScroll();
  initPureCounter();
  initializeModal();
});
