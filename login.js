const name = document.getElementById('username')
const password= document.getElementById('password')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const txt_field= element.parentElement;
    const errorDisplay = txt_field.querySelector('.error')

    errorDisplay.innerText = message;
    txt_field.classList.add('error');
    txt_field.classList.remove('success')
}

const setSuccess = element => {
    const txt_field = element.parentElement;
    const errorDisplay = txt_field.querySelector('.error')

    errorDisplay.innerText = '';
    txt_field.classList.add('success');
    txt_field.classList.remove('error')
};

const validateInputs =  () => {
    const nameValue = name.value.trim();
    const passwordValue = password.value.trim();

    if(nameValue === '') {
        setError(name, 'Username is required');
    } else {
        setSuccess(name);
    }

    if(passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8) {
        setError(password, 'Password must be at least 8 characters')
    } else {
        setSuccess(password);
        if (nameValue !== '' && passwordValue.length >= 8) {
            alert("You are successfully logged in!")

            setTimeout (() => {
            window.location.href = "base.html"
        }, 0)
        }
    }
}