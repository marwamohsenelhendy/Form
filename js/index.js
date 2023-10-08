const form = document.getElementById('login-form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const submitButton = document.querySelector('.btn');
const successMessage = document.createElement('h4');
const errorMessage = document.createElement('h4');


submitButton.addEventListener('click', function(sumbit) {
  sumbit.preventDefault(); 

  successMessage.remove();
  errorMessage.remove();

  const email = emailInput.value;
  const password = passwordInput.value;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    errorMessage.textContent = 'Email is not valid';
    errorMessage.style.color = 'red';
    errorMessage.style.marginLeft = "3rem";
    emailInput.parentNode.appendChild(errorMessage);
  } else if (password.trim().length < 6) {
    errorMessage.textContent = 'Password is not valid';
    errorMessage.style.color = 'red';
    errorMessage.style.marginLeft = "3rem";
    passwordInput.parentNode.appendChild(errorMessage);
  } else {
    successMessage.textContent = 'All fields are valid';
    successMessage.style.color = 'green';
    successMessage.style.marginLeft = "3rem";
    submitButton.parentNode.appendChild(successMessage);
  }
});

  