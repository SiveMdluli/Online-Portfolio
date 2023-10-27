const openResume = () => {
  const resumeButtons = document.querySelectorAll('.resume-button');

  resumeButtons.forEach((button) => {
    button.addEventListener('click', () => {
      window.open(
        'https://drive.google.com/file/d/1coY7qGQYepZD0GJGNsmMs2yh6Bq5u-QK/view?usp=sharing',
        '_blank'
      );
    });
  });
};

export default openResume;
