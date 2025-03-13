document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert(`Message from ${name} sent successfully!`);
        // Reset the form
        document.getElementById('contact-form').reset();
    } else {
        alert('Please fill out all fields.');
    }
});