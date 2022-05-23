const form = document.querySelector('#form')
const firstName = document.querySelector('#fname')
const lastName = document.querySelector('#lname');
const emailAddress = document.querySelector('#email');
const password = document.querySelector('#password');
const errorFirstNameIcon = document.querySelector('.error-f-i');
const errorLastNameIcon = document.querySelector('.error-l-i');
const errorPasswordIcon = document.querySelector('.error-p-i');
const errorEmailIcon = document.querySelector('.error-e-i');
const errorFirstNameMessage = document.querySelector('.error-f');
const errorLastNameMessage = document.querySelector('.error-l');
const errorPasswordMessage = document.querySelector('.error-p');
const errorEmailMessage = document.querySelector('.error-e');

function ValidateEmail(mail) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(mail.match(mailformat)) {
        return true;
    }
    else {
        return false;
    }
}

const Initialize = () => {
    firstName.classList.remove("input-error");
    errorFirstNameIcon.style.visibility = 'hidden';
    errorFirstNameMessage.style.visibility = 'hidden';
    lastName.classList.remove("input-error");
    errorLastNameIcon.style.visibility = 'hidden';
    errorLastNameMessage.style.visibility = 'hidden';
    password.classList.remove("input-error");
    errorPasswordIcon.style.visibility = 'hidden';
    errorPasswordMessage.style.visibility = 'hidden';
    emailAddress.classList.remove("input-error");
    errorEmailIcon.style.visibility = 'hidden';
    errorEmailMessage.style.visibility = 'hidden';
}

const submitCheck =  () => {
    Initialize();
    fname = firstName.value;
    lname = lastName.value;
    email = emailAddress.value;
    pass = password.value;
    if(fname == '') {
        firstName.classList.add("input-error");
        errorFirstNameIcon.style.visibility = 'visible';
        errorFirstNameMessage.style.visibility = 'visible';
    }
    if(lname == '') {
        lastName.classList.add("input-error");
        errorLastNameIcon.style.visibility = 'visible';
        errorLastNameMessage.style.visibility = 'visible';
    }
    if(pass == '') {
        password.classList.add("input-error");
        errorPasswordIcon.style.visibility = 'visible';
        errorPasswordMessage.style.visibility = 'visible';
    }
    if(!ValidateEmail(email) || email == ''){
        emailAddress.classList.add("input-error");
        errorEmailIcon.style.visibility = 'visible';
        errorEmailMessage.style.visibility = 'visible';
    }
}

form.addEventListener('submit', e => {
    e.preventDefault();
    submitCheck();
});