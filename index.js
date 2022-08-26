const cardName = document.getElementById("card_name");
const cardNumber = document.getElementById("card_number");
const expiryMonth = document.getElementById("expiry_month");
const expiryYear = document.getElementById("expiry_year");
const cvv = document.getElementById("cvv");
const cardNameError = document.getElementById("card_name__error");
const cardNumberError = document.getElementById("card_number__error");
const expiryMonthError = document.getElementById("month__error");
const expiryYearError = document.getElementById("year__error");
const cvvError = document.getElementById("cvv__error");

const checkEmpty = (value) => {
  return value.trim().length === 0;
};

const showErrorMessage = (input, error, message) => {
  error.innerHTML = message;
  error.style.display = "inline";
  input.style.border = "1px solid hsl(0, 100%, 66%)";
};

const removeErrorMessage = (input, error) => {
  error.style.display = "none";
  input.style.border = "";
};

function containsNumber(str) {
  return /\d/.test(str);
}
function containsCharacter(str) {
  return /[a-zA-Z]/g.test(str);
}

const validateForm = (input, error) => {
  console.log(input.name);
  const value = input.value.trim();
  if (checkEmpty(value)) {
    showErrorMessage(input, error, "Can't be blank");
  } else if (input.name === "card_name" && containsNumber(value)) {
    showErrorMessage(input, error, "Wrong format, characters only");
  } else if (input.name === "card_number" && containsCharacter(value)) {
    showErrorMessage(input, error, "Wrong format, numbers only");
  } else if (input.name === "card_number" && value.length != 16) {
    showErrorMessage(input, error, "Length should be 16");
  } else if (input.name === "cvv" && containsCharacter(value)) {
    showErrorMessage(input, error, "Numbers only");
  } else if (input.name === "cvv" && value.length != 3) {
    showErrorMessage(input, error, "Length should be 3");
  } else if (input.name === "expiry_month" && containsCharacter(value)) {
    showErrorMessage(input, error, "Numbers only");
  } else if (input.name === "expiry_month" && value.length != 2) {
    showErrorMessage(input, error, "Format must be MM");
  } else if (input.name === "expiry_year" && containsCharacter(value)) {
    showErrorMessage(input, error, "Numbers only");
  } else if (input.name === "expiry_year" && value.length != 2) {
    showErrorMessage(input, error, "Format must be YY");
  } else {
    removeErrorMessage(input, error);
    // Form is valid
    return true;
  }
  // Form is invalid
  return false;
};

const submitHandler = (event) => {
  event.preventDefault();
  validateForm(cardName, cardNameError);
  validateForm(cardNumber, cardNumberError);
  validateForm(expiryMonth, expiryMonthError);
  validateForm(expiryYear, expiryYearError);
  validateForm(cvv, cvvError);
};
