const form = document.querySelector("form");

var nField = document.querySelector(".name");
var nInput = document.querySelector(".name input");
var pField = document.querySelector(".phone");
var pInput = document.querySelector(".phone input");
var cField = document.querySelector(".city");
var cInput = document.querySelector(".city input");

var submit = document.querySelector(".submit");

const buttonClick = (e) => {

  // (nInput.value == "") ? nField.classList.add("shake", "error") : checkName();
  // (pInput.value == "") ? pField.classList.add("shake", "error") : checkPhone();
  // (cInput.value == "") ? cField.classList.add("shake", "error") : checkCity();
  setInterval(() => {
    checkName();
    checkPhone();
    checkCity();
  }, 100);

  setTimeout(() => { //remove shake class after 500ms
    nField.classList.remove("shake");
    pField.classList.remove("shake");
    cField.classList.remove("shake");
  }, 500);

  nInput.onkeyup = () => {
    checkName();
  }
  pInput.onkeyup = () => {
    checkPhone();
  }
  cInput.onkeyup = () => {
    checkCity();
  }

  function checkName() {
    if (nInput.value == "") {
      nField.classList.add("error", "shake");
      nField.classList.remove("valid");

      let errorTxt = nField.querySelector(".error-txt");
      errorTxt.innerText = "Name can't be blank";

    } else {
      nField.classList.remove("error");
      nField.classList.add("valid");

      let errorTxt = nField.querySelector(".error-txt");
      errorTxt.innerText = "";
    }
  }

  function checkPhone() {
    let patternFalse = /^[0-9]{1,9}$/;
    let pattern = /^[0-9]{10}$/;

    if (pInput.value.match(pattern)) {

      pField.classList.remove("error");
      pField.classList.add("valid");

      let errorTxt = pField.querySelector(".error-txt");
      errorTxt.innerText = ""; // clear error message

    } else if (pInput.value.match(patternFalse)) {

      pField.classList.add("error", "shake");
      pField.classList.remove("valid");
      let errorTxt = pField.querySelector(".error-txt");

      errorTxt.innerText = "Phone Number must be 10 digit";

    } else {
      pField.classList.add("error", "shake");
      pField.classList.remove("valid");
      let errorTxt = pField.querySelector(".error-txt");

      (pInput.value != "") ? errorTxt.innerText = "Enter a valid phone number" : errorTxt.innerText = "Phone number can't be blank";
    }
  }

  function checkCity() {
    if (cInput.value == "") {
      cField.classList.add("error", "shake");
      cField.classList.remove("valid");
    } else {
      cField.classList.remove("error");
      cField.classList.add("valid");
    }

    let errorTxt = cField.querySelector(".error-txt");

    (cInput.value != "") ? errorTxt.innerText = "" : errorTxt.innerText = "City can't be blank";
  }

};

submit.addEventListener('click', buttonClick);