// ES6 JavaScript to open your resume in a new tab/window when the button is clicked
const openResume = () => {
  const resumeButton = document.getElementById('resume-button');

  resumeButton.addEventListener('click', () => {
    window.open(
      'https://drive.google.com/file/d/1aYNfedUhNAt7aLj0mwl1z_lFpjeFWbq9/view?usp=sharing',
      '_blank'
    );
  });
};

export default openResume;
