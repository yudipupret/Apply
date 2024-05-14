document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('application-form');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission

        // Collect form data
        const formData = new FormData(form);

        // Send form data via EmailJS
        emailjs.sendForm('service_qgp7shw', 'template_0g51isx', formData)
            .then(function () {
                alert('Form submitted successfully!');
                form.reset(); // Reset the form after successful submission
            }, function (error) {
                console.error('Error sending email:', error);
                alert('Oops! Something went wrong.');
            });
    });
});
