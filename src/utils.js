export function formatPhoneInput(phoneInput) {
    phoneInput.addEventListener("input", () => {
        let value = phoneInput.value.replace(/\D/g, ""); 

        if (value.startsWith("7")) {
            value = value.slice(0, 11); 
        } else {
            value = "7" + value.slice(0, 10); 
        }

        phoneInput.value = value.replace(/(\d{1})(\d{3})?(\d{3})?(\d{2})?(\d{2})?/, 
            (_, a, b, c, d, e) => `+${a} ${b ? "(" + b : ""}${c ? ") " + c : ""}${d ? "-" + d : ""}${e ? "-" + e : ""}`);
    });
}

export function validatePhone(phoneInput, validationMessage) {
    const phonePattern = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/;
    
    if (phonePattern.test(phoneInput.value)) {
        validationMessage.innerHTML = "";   
        return true;  
    } else {
        validationMessage.innerHTML = "Введите корректный номер телефона";  
        validationMessage.style.color = "var(--error-text-color)"; 
        return false;  
    }
}