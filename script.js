
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent actual form submission
    alert("Message sent successfully!");
    this.reset(); // Reset form fields
});