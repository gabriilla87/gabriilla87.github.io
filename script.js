const contactsForm = document.getElementById('contacts_form')
const nameField = document.getElementById("name_field")
const nameFieldValidation = document.getElementById("name_field_validation")
const emailField = document.getElementById("email_field")
const emailFieldValidation = document.getElementById('email_field_validation')
const messageField = document.getElementById("message_field")
const messageFieldValidation = document.getElementById("message_field_validation")
const submitButton = document.getElementById("submit_button")
const privacyPolicyCheckbox = document.getElementById("privacy_policy_checkbox")
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateEmail(email) {
    return emailRegex.test(email);
}
const removeFieldError = (field, fieldValidation) => {
    field.addEventListener("keydown", () => {
        fieldValidation.style.display = "none"
    })
}

submitButton.addEventListener("click", (e) => {
    e.preventDefault()

    let isValid = true

    if (!nameField.value.trim()) {
        nameFieldValidation.style.display = "block"
        isValid = false
    }

    if (!validateEmail(emailField.value.trim())) {
        emailFieldValidation.style.display = "block"
        isValid = false
    }

    if (!messageField.value.trim()) {
        messageFieldValidation.style.display = "block"
        isValid = false
    }

    if (isValid && privacyPolicyCheckbox.checked) {
        const formData = {
            name: nameField.value,
            email: emailField.value,
            message: messageField.value,
        };

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Ошибка при отправке данных.');
                }
                return response.json();
            })
            .then(data => {
                console.log('Успешно отправлено:', data);
                alert('Сообщение успешно отправлено!');
                contactsForm.reset();
            })
            .catch(error => {
                console.error(error);
                alert('Произошла ошибка при отправке сообщения.');
            });
    }
})

privacyPolicyCheckbox.addEventListener('change', () => {
    submitButton.disabled = !privacyPolicyCheckbox.checked;
})

removeFieldError(nameField, nameFieldValidation)
removeFieldError(emailField, emailFieldValidation)
removeFieldError(messageField, messageFieldValidation)