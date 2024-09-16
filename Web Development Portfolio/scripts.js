// Smooth scrolling for navigation links
/*
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
*/
// Contact form submit function to send an email via mailto with validation
function sendMail() {
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var message = document.getElementById('message').value.trim();

    // Get selected radio button value
    var submissionType = document.querySelector('input[name="submissionType"]:checked');
    var submissionTypeValue = submissionType ? submissionType.value : 'Not Specified';


    // Simple input validation
    if (name === '' || email === '' || message === '') {
        alert('All fields are required.');
        return;
    }

    // Email format validation (this is a regular expression to ensure the email is entered properly with the right format)
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Open the user's default email client
    //%0A is a line break to make the output look cleaner
    //EncodeURIComponent function allow special characters to be included in the body of the email
    window.location.href = "mailto:drewali@outlook.com?subject=Contact%20from%20" + encodeURIComponent(name) + "&body=Name: " + encodeURIComponent(name) + "%0AEmail: " + encodeURIComponent(email) + "%0A%0ASubmission Type: " + encodeURIComponent(submissionTypeValue) + "%0A%0AMessage: " + encodeURIComponent(message);
}
