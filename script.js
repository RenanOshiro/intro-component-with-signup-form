const fname = document.querySelector('#fname');
const lname = document.querySelector('#lname');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const submit = document.querySelector('.btn-submit');
const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const inputs = [fname, lname, email, password];

submit.addEventListener('click', (event) => {
  let validated = true;
  const errorMsgs = document.querySelectorAll('.error-msg');
  event.preventDefault();
  validateInputs();
  checkBlank();
  errorMsgs.forEach((error) => {
    if (error.style.display === 'block') {
      validated = false;
      return;
    }
  });
  console.log(validated);
  if (validated) {
    submitForm();
  }
});

function validateInputs() {
  fname.addEventListener('blur', (event) => {
    verifyName(event);
  });
  fname.addEventListener('input', (event) => {
    checkInput(event);
  });
  lname.addEventListener('blur', (event) => {
    verifyName(event);
  });
  lname.addEventListener('input', (event) => {
    checkInput(event);
  });
  email.addEventListener('blur', (event) => {
    verifyEmail(event);
  });
  email.addEventListener('input', (event) => {
    checkInput(event);
  });
  password.addEventListener('blur', (event) => {
    verifyPassword(event);
  });
  password.addEventListener('input', (event) => {
    checkInput(event);
  });
}

function verifyName(event) {
  if (event.target.value === '') {
    event.target.nextElementSibling.style.display = 'block';
    event.target.style.outline = '0';
    event.target.style.border = '2px solid hsl(0, 100%, 74%)';
  } else {
    event.target.nextElementSibling.style.display = 'none';
    event.target.removeAttribute('style');
  }
}

function verifyEmail(event) {
  if (event.target.value.match(regex)) {
    event.target.nextElementSibling.style.display = 'none';
    event.target.removeAttribute('style');
  } else {
    event.target.nextElementSibling.style.display = 'block';
    event.target.style.outline = '0';
    event.target.style.border = '2px solid hsl(0, 100%, 74%)';
  }
}

function verifyPassword(event) {
  if (event.target.value === '' || event.target.value.length < 8) {
    event.target.nextElementSibling.style.display = 'block';
    event.target.style.outline = '0';
    event.target.style.border = '2px solid hsl(0, 100%, 74%)';
  } else {
    event.target.nextElementSibling.style.display = 'none';
    event.target.removeAttribute('style');
  }
}

function checkInput(event) {
  if (event.target.value !== '') {
    event.target.nextElementSibling.style.display = 'none';
    event.target.removeAttribute('style');
  }
}

function checkBlank() {
  if (fname.value === '') {
    fname.nextElementSibling.style.display = 'block';
    fname.style.outline = '0';
    fname.style.border = '2px solid hsl(0, 100%, 74%)';
  } else {
    fname.nextElementSibling.style.display = 'none';
    fname.removeAttribute('style');
  }
  if (lname.value === '') {
    lname.nextElementSibling.style.display = 'block';
    lname.style.outline = '0';
    lname.style.border = '2px solid hsl(0, 100%, 74%)';
  } else {
    lname.nextElementSibling.style.display = 'none';
    lname.removeAttribute('style');
  }
  if (email.value.match(regex)) {
    email.nextElementSibling.style.display = 'none';
    email.removeAttribute('style');
  } else {
    email.nextElementSibling.style.display = 'block';
    email.style.outline = '0';
    email.style.border = '2px solid hsl(0, 100%, 74%)';
  }
  if (password.value === '' || password.value.length < 8) {
    password.nextElementSibling.style.display = 'block';
    password.style.outline = '0';
    password.style.border = '2px solid hsl(0, 100%, 74%)';
  } else {
    password.nextElementSibling.style.display = 'none';
    password.removeAttribute('style');
  }
}

function submitForm() {
  document.querySelectorAll('.input-base').forEach((input) => {
    input.style.border = '2px solid hsl(154, 59%, 51%)';
  });
}

validateInputs();

/*
inputs.forEach((input) => {
  input.addEventListener('blur', validateInput(input));
});

function validateInput(event) {
  switch (inputs.indexOf(event)) {
    case 0:
      if (event.value === '') {
        event.nextElementSibling.style.display = 'block';
      } else {
        event.nextElementSibling.style.display = 'none';
      }
      break;
    case 1:
      console.log(inputs[1]);
      break;
    case 2:
      console.log(inputs[2]);
      break;
    default:
      console.log(inputs[3]);
      break;
  }
}
*/
