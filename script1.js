
// Function to submit the form and update the summary table
function submitForm() {
  const fullName = document.getElementById('fullName').value;
  const email = document.getElementById('email').value;
  const gender = document.getElementById('gender').value;
  const phone = document.querySelector('input[name="phone"]').value;
  // Update summary table with user details
  document.getElementById('summary-name').innerText = fullName || '-';
  document.getElementById('summary-mail').innerText = email || '-';
  document.getElementById('summary-gender').innerText = gender || '-';
  document.getElementById('summary-telephone').innerText = phone || '-';

  // Store user details in localStorage
  const userDetails = {
      fullName: fullName,
      email: email,
      gender: gender,
      phone: phone
  };
  localStorage.setItem('userDetails', JSON.stringify(userDetails));
}

// Load user details from localStorage when the page loads
window.addEventListener('load', function () {
  const userDetails = JSON.parse(localStorage.getItem('userDetails'));
  if (userDetails) {
      document.getElementById('summary-name').innerText = userDetails.fullName || '-';
      document.getElementById('summary-mail').innerText = userDetails.email || '-';
      document.getElementById('summary-gender').innerText = userDetails.gender || '-';
      document.getElementById('summary-telephone').innerText = userDetails.phone || '-';
  }
});
    

document.getElementById("summary-date").innerHTML = localStorage.getItem("local-date");
document.getElementById("summary-time").innerHTML = localStorage.getItem("local-time");
document.getElementById("summary-duration").innerHTML = localStorage.getItem("local-duration");
document.getElementById("summary-tickets").innerHTML = localStorage.getItem("local-tickets");
document.getElementById("summary-total").innerHTML = localStorage.getItem("local-total");








// Function to handle the "Finish" button action
function finishForm() {
  // Reset error messages
  resetErrorMessages();

  // Get form input values
  const fullName = document.getElementById('fullName').value;
  const email = document.getElementById('email').value;
  const confirmEmail = document.getElementById('confirmEmail').value;
  const gender = document.getElementById('gender').value;
  const phone = document.querySelector('input[name="phone"]').value;

  // Validate form fields
  let isValid = true;

  if (!fullName) {
    showError('fullNameError', 'Please enter your full name.');
    isValid = false;
  }

  if (!email) {
    showError('emailError', 'Please enter your email address.');
    isValid = false;
  }

  if (!confirmEmail) {
    showError('confirmEmailError', 'Please confirm your email address.');
    isValid = false;
  } else if (email !== confirmEmail) {
    showError('confirmEmailError', 'Email addresses do not match.');
    isValid = false;
  }

  if (!gender) {
    showError('genderError', 'Please select your gender.');
    isValid = false;
  }

  // Validate phone using a simple pattern (you can modify this)
  const phonePattern = /^[0-9]{10}$/;
   if (!phone.match(phonePattern)) {
    showError('phoneError', 'Please enter a valid  phone number.');
    isValid = false;
  }

  if (isValid) {
    // Clear any previous error messages
    resetErrorMessages();

    // Update summary table with user details
    document.getElementById('summary-name').innerText = fullName;
    document.getElementById('summary-mail').innerText = email;
    document.getElementById('summary-gender').innerText = gender;
    document.getElementById('summary-telephone').innerText = phone;

    // Store user details in localStorage
    const userDetails = {
      fullName: fullName,
      email: email,
      gender: gender,
      phone: phone
    };
    localStorage.setItem('userDetails', JSON.stringify(userDetails));

    
    const confirmationMessage = 'Thank you! Your details have been successfully submitted.';
    alert(confirmationMessage);
  }
}

// Function to reset error messages
function resetErrorMessages() {
  const errorElements = document.querySelectorAll('.error-message');
  errorElements.forEach(element => {
    element.innerText = '';
  });
}

// Function to show error messages
function showError(errorId, message) {
  const errorElement = document.getElementById(errorId);
  errorElement.innerText = message;
}

function submitForm(){ 

let name1=document.getElementById('name').value;
let email1=document.getElementById('email').value;
let number1=document.getElementById('number').value;

localStorage.setItem("loc-name",name1);
localStorage.setItem("loc-email",email1);
localStorage.setItem("loc-number",number1);
}

document.getElementById('summary-name').innerHTML=localStorage.getItem('loc-name');
document.getElementById('summary-mail').innerText=localStorage.getItem('loc-email');
document.getElementById('summary-telephone').innerText=localStorage.getItem('loc-number');

