// Get the elements
const movingWords = document.querySelector('.moving-words');
const getInTouchButton = document.querySelector('.get-in-touch');
const socialMediaLinks = document.querySelectorAll('.social-media a');

// Add event listeners
getInTouchButton.addEventListener('click', () => {
  alert('Thank you for getting in touch!');
});

socialMediaLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    alert(`You clicked on ${link.textContent}!`);
  });
});

// Animate the moving words
movingWords.addEventListener('mouseover', () => {
  movingWords.style.animationPlayState = 'running';
});

movingWords.addEventListener('mouseout', () => {
  movingWords.style.animationPlayState = 'paused';
});
