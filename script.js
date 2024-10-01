// script.js

// Form submission handler
document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from refreshing the page

    // Get the values from the input fields
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const color = document.getElementById('color').value;

    // Validate the input fields
    if (name === '' || age === '') {
        alert('Please fill in all the fields!');
        return;
    }

    // Display the dynamic content
    document.getElementById('displayName').textContent = name;
    document.getElementById('displayAge').textContent = age;
    document.getElementById('displayColor').textContent = color;

    // Show the output section
    document.getElementById('output').style.display = 'block';
});
