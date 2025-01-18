// Get the form elements
const form = document.querySelector('.mentor-signup-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const professionInput = document.querySelector('#profession');
const expertiseInput = document.querySelector('#expertise');
const availabilityInput = document.querySelector('#availability');
const submitButton = document.querySelector('button[type="submit"]');

// Add event listener to the submit button
submitButton.addEventListener('click', (e) => {
e.preventDefault();

// Get the input values
const name = nameInput.value.trim();
const email = emailInput.value.trim();
const profession = professionInput.value.trim();
const expertise = expertiseInput.value.trim();
const availability = availabilityInput.value.trim();

// Validate the input values
if (name === '' || email === '' || profession === '' || expertise === '' || availability === '') {
alert('Please fill in all the required fields.');
return;
}

// Submit the form data
const formData = {
name,
email,
profession,
expertise,
availability
};

console.log(formData);

// Send the form data to the API
fetch('/mentor-signup', {
method: 'POST',
headers: {
'Content-Type': 'application/json'
},
body: JSON.stringify(formData)
})
.then((response) => response.json())
.then((data) => console.log(data))
.catch((error) => console.error(error));
});

// Get the cube elements
const cube = document.querySelector('.cube');
const sides = [
{ transform: 'rotateX(0) rotateY(0)' }, // front
{ transform: 'rotateX(0) rotateY(180deg)' }, // back
{ transform: 'rotateX(0) rotateY(90deg)' }, // right
{ transform: 'rotateX(0) rotateY(-90deg)' }, // left
{ transform: 'rotateX(90deg) rotateY(0)' }, // top
{ transform: 'rotateX(-90deg) rotateY(0)' }, // bottom
];

let currentSide = 0;

function rotateCube() {
cube.style.transform = sides[currentSide].transform;
currentSide++;
if (currentSide >= sides.length) {
currentSide = 0;
}
setTimeout(rotateCube, 2000); // rotate every 2 seconds
}

rotateCube();
