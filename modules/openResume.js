const openResume = () => {
  const resumeButtons = document.querySelectorAll('.resume-button');

  resumeButtons.forEach((button) => {
    button.addEventListener('click', () => {
      window.open(
        'https://drive.google.com/file/d/1aYNfedUhNAt7aLj0mwl1z_lFpjeFWbq9/view?usp=sharing',
        '_blank'
      );
    });
  });
};

export default openResume;
