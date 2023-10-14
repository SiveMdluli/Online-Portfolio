export const initSkillsAnimation = () => {
  const skillBars = document.querySelectorAll('.skill-progress');

  function animateSkillBars() {
    skillBars.forEach((skillBar) => {
      if (
        isElementInViewport(skillBar) &&
        !skillBar.classList.contains('animated')
      ) {
        skillBar.style.width = skillBar.dataset.skillLevel + '%';
        skillBar.classList.add('animated');
      }
    });
  }

  function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Add an event listener for scroll events to trigger the animation
  window.addEventListener('scroll', animateSkillBars);
};
