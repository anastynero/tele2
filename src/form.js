import * as utils from "./utils.js";

document.addEventListener("DOMContentLoaded", () => {
    const responseMessage = document.getElementById('response-message');
    const telephoneNumber = document.getElementById('telephone-form')
    const submitBtn = document.getElementById('submit-form-btn');
    const validationMessage = document.getElementById('validation-message-form');
    const checkbox = document.getElementById('checkbox-form');
    const checkedMessage = document.getElementById('checked-message-form');

    const usedPhones = ["+7 (999) 999-99-99"];

    responseMessage.style.display = 'none';

    utils.formatPhoneInput(telephoneNumber);

    telephoneNumber.addEventListener("blur", () => {
            utils.validatePhone(telephoneNumber, validationMessage);
        });

    checkbox.addEventListener("change", () => {
        checkedMessage.style.display = checkbox.checked ? "none" : "block";
    });

    submitBtn.addEventListener("click", (event) => {
        event.preventDefault(); 
        const isValidPhone = utils.validatePhone(telephoneNumber, validationMessage);
        if (!isValidPhone) return;
            const isChecked = checkbox.checked;
        if (!isChecked) {
            checkedMessage.style.display = "block";
            return;
        }
        responseMessage.style.display = 'block';
        if (usedPhones.includes(telephoneNumber.value)) {
            responseMessage.innerHTML = `
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="6" cy="6" r="6" fill="#FF4D6C"/>
                <path d="M5.568 3L5.752 7.24H6.344L6.536 3H5.568ZM6.064 9.096C6.352 9.096 6.6 8.856 6.6 8.552C6.6 8.256 6.352 8.016 6.064 8.016C5.76 8.016 5.52 8.256 5.52 8.552C5.52 8.856 5.76 9.096 6.064 9.096Z" fill="#661422"/>
            </svg>
            На этот номер уже выслан промокод`;  

        return; 
    }
    responseMessage.innerHTML = `
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-left: 5px;">
            <circle cx="6" cy="6" r="6" fill="#07CB5C"/>
            <path d="M3.5 6L5.05945 7.5L8.5 4" stroke="#04662E"/>
        </svg>
        Промокод выслан на ваш номер`;
})
});