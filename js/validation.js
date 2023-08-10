document.querySelector('#contact-input').addEventListener('submit', (e) => {
    const email = document.getElementById('email').value;
    const errorEmail = document.querySelector('#err'); // Assuming you have an element with the ID "err-email"
  
    const isLowercase = (str) => str === str.toLowerCase();
    if (!isLowercase(email)) {
        e.preventDefault();
        errorEmail.textContent = 'Please check if your email is in lowercase letters!!!';
        errorEmail.style.background = 'red';
    } else {
        errorEmail.textContent = ''; // Clear the error message
        errorEmail.style.background = 'transparent'; // Reset the background
    }
});