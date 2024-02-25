"use strict";

const btnEl = document.querySelector(".btn");
const inputEl = document.getElementById("input");
const iconEl = document.querySelector(".fa-copy");
const alertEl = document.querySelector(".alert-container");

btnEl.addEventListener("click", () => {
  randomPass();
});

function randomPass() {
  const chars =
    "1234567890abcdefghijklmnopqrstuvwxz!@#$%^&*():?_+{}[]ABCDEFGHIJKLNMOPQRSTUYWXYZ";
  const passwordLength = 14;
  let password = "";

  for (let i = 0; i < passwordLength; i++) {
    const randomNum = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNum, randomNum + 1);

    inputEl.value = password;
    alertEl.innerText = password + "  coppied";
  }

  inputEl.value = password;
}

iconEl.addEventListener("click", () => {
  copyPass();

  if (inputEl.value) {
    alertEl.classList.remove("active");
    setTimeout(() => {
      alertEl.classList.add("active");
    }, 2000);
  }
});

function copyPass() {
  inputEl.select();
  inputEl.setSelectionRange(0, 9999);
  navigator.clipboard.writeText(inputEl.value);
}
