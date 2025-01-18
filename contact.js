// Get the form elements
const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');

// Add an event listener to the form
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = nameInput.value;
    const email = emailInput.value;
    const message = messageInput.value;
    alert(`Thank you for contacting us, ${name}! We will respond to your message soon.`);
});