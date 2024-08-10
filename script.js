console.log("hi!!!!!");

//  SET PHONE PREFIX BY COUNTRY
// const input = document.querySelector("#phone");
// window.intlTelInput(input, {
//     initialCountry: "ua",  // Встановіть початкову країну (UA для України)
//     utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js", // Для форматування
// });




//  ON_FORM_SUBMIT
document.addEventListener('DOMContentLoaded', function() {
    const input = document.querySelector("#phone");
    const iti = window.intlTelInput(input, {
        initialCountry: "ua",
        utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
    });

    document.querySelector("#phoneForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Запобігає стандартному відправленню форми

        // Отримуємо повний номер телефону
        const fullNumber = iti.getNumber();

        // Виводимо номер у консоль
        console.log(fullNumber);
    });
});








document.getElementById('phoneForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Зупиняє відправку форми

    // Отримання значень полів
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();

    // Простий приклад валідації
    if (name === '') {
        alert('Будь ласка, введіть ім\'я та прізвище.');
        return;
    }

    if (phone === '' || !window.intlTelInputGlobals.getInstance(document.getElementById('phone')).isValidNumber()) {
        alert('Будь ласка, введіть правильний номер телефону.');
        return;
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (email === '' || !emailPattern.test(email)) {
        alert('Будь ласка, введіть правильний email.');
        return;
    }

    // Якщо все пройшло валідацію
    console.log('Форма валідна. Ім\'я:', name, 'Телефон:', phone, 'Email:', email);
});



console.log("hello!!!!!");