// Toggle Dark Mode
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Form Submission with AJAX
const form = document.getElementById('application-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    fetch('/apply', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        alert('Application submitted successfully!');
        form.reset();
    })
    .catch(error => {
        alert('There was an error submitting your application. Please try again.');
    });
});
