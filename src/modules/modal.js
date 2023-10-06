export function initializeModal() {
  // Get a reference to the image and the modal
  const modalTriggerImage = document.getElementById('#modalTriggerImage');
  const demoModal = new bootstrap.Modal(document.getElementById('demoModal'));

  // Add a click event listener to the image
  modalTriggerImage.addEventListener('click', () => {
    // Show the modal with a nice slide-in animation
    demoModal.show();
  });
}
