document.querySelector('.button-contactform').addEventListener('click', (e) => {
  const email = document.getElementById('email').value;
  const errorEmail = document.querySelector('#err');

  const right = (str) => str === str.toLowerCase();
  if (!right(email)) {
    e.preventDefault();
    errorEmail.textContent = 'Please check if your email is in lowercase letters!!!';
    errorEmail.style.background = 'red';
  }
});
