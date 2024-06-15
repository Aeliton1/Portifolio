document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    var responseMessage = document.getElementById('responseMessage');
    
    fetch('http://localhost:3000/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, message })
    })
    .then(response => response.json())
    .then(data => {
        responseMessage.textContent = data.message;
        responseMessage.style.color = 'green';
    })
    .catch(error => {
        responseMessage.textContent = 'An error occurred. Please try again.';
        responseMessage.style.color = 'red';
    });
});
