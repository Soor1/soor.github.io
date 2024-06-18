document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Show a thank you message
    document.getElementById('confirmation').style.display = 'block';
    
    // Hide the form
    document.getElementById('contact-form').style.display = 'none';
});
