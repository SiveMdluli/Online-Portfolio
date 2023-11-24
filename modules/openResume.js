const openResume = () => {
  const resumeButtons = document.querySelectorAll('.resume-button');

  resumeButtons.forEach((button) => {
    button.addEventListener('click', () => {
      window.open('https://sivemdluli.github.io/Resume/');
    });
  });
};

export default openResume;
