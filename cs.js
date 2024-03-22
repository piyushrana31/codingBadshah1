document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        // You can implement form submission logic here, like sending data to server or displaying a thank you message
        alert('Thank you for your message!');
        contactForm.reset(); // Reset the form after submission
    });
});
