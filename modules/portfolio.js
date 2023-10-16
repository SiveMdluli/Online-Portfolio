import Isotope from 'isotope-layout';
import AOS from 'aos';
import { on } from './eventListeners.js';
import { select } from './selectors.js';

export const initPortfolio = () => {
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item',
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on(
        'click',
        '#portfolio-flters li',
        function (e) {
          e.preventDefault();
          portfolioFilters.forEach(function (el) {
            el.classList.remove('filter-active');
          });
          this.classList.add('filter-active');

          portfolioIsotope.arrange({
            filter: this.getAttribute('data-filter'),
          });
          portfolioIsotope.on('arrangeComplete', function () {
            AOS.refresh();
          });
        },
        true
      );

      // Selecting items from modal template
      const modal = select('#projectModal');
      const modalImage = modal.querySelector('img');
      const modalDescription = modal.querySelector('p');
      const modalBuildWith = modal.querySelector('ul');
      const modalSourceButton = modal.querySelector('#source-button');
      const modalLiveButton = modal.querySelector('#live-button');
      // Click event listener for portfolio items
      const portfolioItems = document.querySelectorAll('.portfolio-item');
      portfolioItems.forEach((item) => {
        item.addEventListener('click', () => {
          const image = item.querySelector('img');
          const description = image.getAttribute('data-description');
          const buildWith = image.getAttribute('data-build-with');
          const githubLink = image.getAttribute('data-github-link');
          const liveLink = image.getAttribute('data-live-link');
          const projectName = image.getAttribute('data-project-name');

          // Update the modal content
          modalTitle.textContent = projectName;
          modalImage.src = image.src;
          modalDescription.textContent = description;
          modalBuildWith.innerHTML = ''; // Clear existing list items before loading the ones on currenlt cicked item

          buildWith.split(',').forEach((item) => {
            const li = document.createElement('li');
            li.textContent = item.trim();
            modalBuildWith.appendChild(li);
          });

          modalSourceButton.href = githubLink;
          modalLiveButton.href = liveLink;

          // Open the modal
          const modalInstance = new bootstrap.Modal(modal);
          modalInstance.show();
        });
      });
    }
  });
};
