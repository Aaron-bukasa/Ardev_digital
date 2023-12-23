// CHECK VALIDATION CONTACTS
let form = document.querySelector('.contact__form');
let userName = document.querySelector('#username');
let userEmail = document.querySelector('#useremail');
let rightValid = document.querySelector('#validation-right');
let inputAll = document.querySelectorAll('.contact__form input');

inputAll.forEach((input) => {
    input.addEventListener('blur', () => {
        input.id == 'username' && checkValidation(input);
        input.id == 'useremail' && checkValidation(input);
    })
})
form.addEventListener('submit', (event) => {
    event.preventDefault();
   ((checkValidation(userName) == true) && (checkValidation(userEmail) == true) && rightValid.checked) && form.submit();
})

function checkValidation(input) {
    let newPMessage;
    let pTextContent;
    let valid;
    
    if(input.id == 'username') {
        let pMessage = document.querySelector('#username + p');
        if(input.value.length < 3) {
            pTextContent = `Veillez saisir un ${input.name} supperieur à 3`;
            errorMessage(input, pMessage, newPMessage, pTextContent)
        } else if(input.value.length > 20) {
            pTextContent = `Veillez saisir un ${input.name} inferieur à 20`;
            errorMessage(input, pMessage, newPMessage, pTextContent)
        } else {
            succefullMessage(input, pMessage);
        }
    }

    if(input.id == 'useremail') {
        let pMessage = document.querySelector('#useremail + p');
        let regex = '^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,6}$';
        let email = input.value;

        if(email.match(regex) == null) {
            pTextContent = `Veillez saisir une addresse ${input.name} correct`
            errorMessage(input, pMessage, newPMessage, pTextContent)
        } else {
            succefullMessage(input, pMessage);
        }
    }

    function errorMessage(inputElement, oneMessage, twoMessage, contentMessage) {
        oneMessage && oneMessage.remove();
        twoMessage = document.createElement('p');
        twoMessage.style.color = 'red';
        twoMessage.textContent = contentMessage;
        inputElement.insertAdjacentElement('afterend', twoMessage);
        inputElement.style.borderColor = 'red';
        valid = false;
    }

    function succefullMessage(inputElement, oneMessage) {
        oneMessage && oneMessage.remove();
        inputElement.style.borderColor = 'green';
        valid = true;
    }

    return valid;
}