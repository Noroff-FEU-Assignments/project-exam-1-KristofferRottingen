const contactFrom = document.querySelector("#contact_form");
const fullName = document.querySelector("#name");
const nameError = document.querySelector("#nameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const subject = document.querySelector("#subject");
const sybjectError = document.querySelector("#subjectError");
const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");


function formCheck(event) {
    event.preventDefault();

    if (lengthCheck(fullName.value, 4)) {
        nameError.style.display = "none";
    } else{
        nameError.style.display = "block";
    }

    if (emailCheck(email.value)) {
        emailError.style.display = "none";
    } else{
        emailError.style.display = "block";
    }

    if (lengthCheck(subject.value, 14)) {
        subjectError.style.display = "none";
    } else{
        subjectError.style.display = "block";
    }

    if (lengthCheck(message.value, 24)) {
        messageError.style.display = "none";
    } else{
        messageError.style.display = "block";
    }

    if (lengthCheck(fullName.value, 4) && emailCheck(email.value) && lengthCheck(subject.value, 14) && lengthCheck(message.value, 24)) {
        contactFrom.innerHTML = `<div class="message_send"><h2>Your message is sendt!<h2></div>`;
    } else {}

    console.log("It´s working!");

}


contactFrom.addEventListener("submit", formCheck)

function lengthCheck(value, len) {
    if (value.trim().length >= len) {
        return true;
    } else {
        return false;
    }
}

function emailCheck(email) {
    const emailExample = /\S+@\S+\.\S+/;
    const emailTest = emailExample.test(email);
    return emailTest;
}