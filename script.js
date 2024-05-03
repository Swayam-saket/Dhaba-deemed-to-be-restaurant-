function validateForm() {
  const firstName = document.getElementById('firstname').value;
  const lastName = document.getElementById('lastname').value;
  const email = document.getElementById('email').value;
  const userid = document.getElementById('userid').value;
  const password = document.getElementById('password').value;
  const confirm_password = document.getElementById('confirm_password').value;

  // Simple email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Check if password and confirm password match
  if (password !== confirm_password) {
    displayError('Passwords do not match', 'confirm_password');
    return;
  }
  // Check if email is in the correct format
  if (!emailRegex.test(email)) {
    displayError('Invalid email format', 'email');
        var inputElement = document.getElementById('email');
        inputElement.value = '';
    return;
  }

  // If all validations pass, proceed to display the data on other pages
  displayDataOnOtherPages(firstname);
  displayDataOnOtherPages(lastname);
  displayDataOnOtherPages(email);
  displayDataOnOtherPages(userid);


  // You can redirect to another page or perform additional actions here
  alert('Registration successful!');

  // Clear the form after successful registration
  document.getElementById('registrationForm').reset();
}

function displayError(message, elementId) {
  // Display error message in red next to the specified element
  errorMessage = document.createElement('p');
  errorMessage.textContent = message;
  errorMessage.style.color = 'red';
  document.getElementById(elementId).insertAdjacentElement('afterend', errorMessage);
}

function displayDataOnOtherPages(firstname) {
  console.log('Registered Name:', firstname);
}
function displayDataOnOtherPages(lastname) {
  console.log('Registered Name:', lastname);
}
function displayDataOnOtherPages(email) {
  console.log('Registered Name:', email);
}
function displayDataOnOtherPages(userid) {
  console.log('Registered Name:', userid);
}
