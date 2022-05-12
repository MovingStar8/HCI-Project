function validateName() {
  let name = document.querySelector("#name");
  let nameLabel = document.querySelector("label[for='name']");
  let nameValue = name.value;

  if (name.value == "" || nameValue.length < 3) {
    name.style.borderColor = "red";
    nameLabel.style.color = "red";
  } else {
    name.style.borderColor = "black";
    nameLabel.style.color = "black";
  }
}

function validateGender() {
  let male = document.querySelector("#male");
  let female = document.querySelector("#female");
  let genderLabel = document.querySelector("label.gender");

  if (male.checked || female.checked) {
    genderLabel.style.color = "black";
  } else {
    genderLabel.style.color = "red";
  }
}

function validateEmail() {
  let email = document.querySelector("#email");
  let emailValue = email.value;
  let emailLabel = document.querySelector("label[for='email'");
  let counter = 0;

  for (let i = 0; i < emailValue.length; i++) {
    if (emailValue[i] == "@") {
      counter = 1;
      break;
    }
  }
  if (counter == 0) {
    email.style.borderColor = "red";
    emailLabel.style.color = "red";
  } else {
    email.style.borderColor = "black";
    emailLabel.style.color = "black";
  }
}

function validatePass() {
  let pass = document.querySelector("#password");
  let passValue = pass.value;
  let lowerCaseLetters = /[a-z]/g;
  let upperCaseLetters = /[A-Z]/g;
  let numbers = /[0-9]/g;
  let passLabel = document.querySelector("label[for='password']");

  if (
    passValue.match(lowerCaseLetters) &&
    passValue.match(upperCaseLetters) &&
    passValue.match(numbers) &&
    passValue.length > 8
  ) {
    passLabel.style.color = "black";
    pass.style.borderColor = "black";
  } else {
    passLabel.style.color = "red";
    pass.style.borderColor = "red";
  }
}

function validateConfirmPass() {
  let pass2 = document.querySelector("#password");
  let pass2Value = pass2.value;
  let confirmPass = document.querySelector("#confirmPass");
  let confirmPassValue = confirmPass.value;
  let confirmPassLabel = document.querySelector("label[for='confirmPass']");

  if (confirmPassValue != pass2Value) {
    confirmPass.style.borderColor = "red";
    confirmPassLabel.style.color = "red";
  } else {
    confirmPass.style.borderColor = "black";
    confirmPassLabel.style.color = "black";
  }
}

function validateTerms() {
  let terms = document.querySelector("#terms");
  let termsLabel = document.querySelector("label[for='terms'");
  let termsLabel2 = document.querySelector("label[for='terms'] a");
  if (terms.checked) {
    termsLabel.style.color = "black";
    termsLabel2.style.color = "black";
  } else {
    termsLabel.style.color = "red";
    termsLabel2.style.color = "red";
  }
}

function validateRegis(e) {
  e.preventDefault();
  validateName();
  validateGender();
  validateEmail();
  validatePass();
  validateConfirmPass();
  validateTerms();

  let form = document.querySelector("#regisForm");

  let nameLabel = document.querySelector("label[for='name']");
  let genderLabel = document.querySelector("label.gender");
  let emailLabel = document.querySelector("label[for='email'");
  let passLabel = document.querySelector("label[for='password']");
  let confirmPassLabel = document.querySelector("label[for='confirmPass']");
  let termsLabel = document.querySelector("label[for='terms'");

  if (
    nameLabel.style.color == "black" &&
    genderLabel.style.color == "black" &&
    emailLabel.style.color == "black" &&
    passLabel.style.color == "black" &&
    confirmPassLabel.style.color == "black" &&
    termsLabel.style.color == "black"
  ) {
    form.submit();
  }
}
