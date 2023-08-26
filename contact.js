document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contactForm");

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // EmailJS configuration
        emailjs.init("YH0H3Q-WW_yUx-ors");

        // Send the email
        emailjs.send("service_6uhie54", "template_djxy63x", {
            from_name: name,
            from_email: email,
            message: message
        })
        .then(function(response) {
            console.log("Email sent:", response);
            // Handle success (e.g., show a success message)
            contactForm.reset();
        }, function(error) {
            console.error("Email error:", error);
            // Handle error (e.g., show an error message)
        });
    });
});
