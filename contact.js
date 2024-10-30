const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const comments = document.getElementById('comments');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const contact_control= element.parentElement;
    const errorDisplay = contact_control.querySelector('.error')

    errorDisplay.innerText = message;
    contact_control.classList.add('error');
    contact_control.classList.remove('success')
}

const setSuccess = element => {
    const contact_control = element.parentElement;
    const errorDisplay = contact_control.querySelector('.error')

    errorDisplay.innerText = '';
    contact_control.classList.add('success');
    contact_control.classList.remove('error')
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs =  () => {
    const nameValue = name.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();
    const commentsValue = comments.value.trim();

    if(nameValue === '') {
        setError(name, 'Username is required');
    } else {
        setSuccess(name);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if(phoneValue === '') {
        setError(phone, 'Phone number is required');
    } else if (phoneValue.length !== 10 || isNaN(phoneValue)) {
        setError(phone, 'Phone number must be 10 digits long');
    } else {
        setSuccess(phone);
    }

    if(commentsValue === '') {
        setError(comments, 'Comments are required');
    } else {
        setSuccess(comments);
        if (nameValue !=='' && isValidEmail(emailValue) && phoneValue.length === 10 && !isNaN(phoneValue)) {
            alert("You have successfully submitted your form!")
            
            setTimeout (() => {
                window.location.href = "contact.html"
        }, 0)
        }
    }
}