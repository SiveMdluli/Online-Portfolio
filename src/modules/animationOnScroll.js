// animationOnScroll.js
import AOS from 'aos';

export const initAnimationOnScroll = () => {
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
    });
  });
};
