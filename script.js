const form            = document.querySelector("form");
const submitButton    = document.querySelector("button");
const passElem        = form['user_pass'];
const confirmPassElem = form['confirm_pass'];
const testRegex       = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/

submitButton.addEventListener('click', (e) => {
    
    if (!testRegex.test(passElem.value)) {
        passElem.value                         = '';
        passElem.setCustomValidity(`Must be at least 8 length long
                                    and contain at least one uppercase 
                                    and lowercase letter, symbol and number`);
    } else {
        if (confirmPassElem.value != passElem.value) {
            confirmPassElem.setCustomValidity('Password unmatched');
        }
    }
})


confirmPassElem.oninput = () => {
    confirmPassElem.setCustomValidity('');
}

function displayLabel(input) {
    input.parentElement.firstElementChild.style.visibility="visible";
}

function hideLabel(input) {
    input.parentElement.firstElementChild.style.visibility="hidden";
}