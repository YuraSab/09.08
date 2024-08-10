document.addEventListener('DOMContentLoaded', function() {
    const input = document.querySelector("#phone");
    const iti = window.intlTelInput(input, {
        initialCountry: "ua",
        utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
    });

    document.querySelector("#phoneForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Запобігає стандартному відправленню форми

        // Get fields values
        const name = document.getElementById('name').value.trim();
        const phone = iti.getNumber(); // Get full number (Prefix + input value)
        const email = document.getElementById('email').value.trim();

        // Validation
        if (name === '') {
            alert('Будь ласка, введіть ім\'я та прізвище.');
            return;
        }

        if (phone === '' || !iti.isValidNumber()) {
            alert('Будь ласка, введіть правильний номер телефону.');
            return;
        }

        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (email === '' || !emailPattern.test(email)) {
            alert('Будь ласка, введіть правильний email.');
            return;
        }

        // If validation is completed
        console.log('Форма валідна. Ім\'я:', name, 'Телефон:', phone, 'Email:', email);

        // Send data to telegram
        const token = '7230681799:AAFAZRBa1tC9V2MXzHpkEvoHHeSYVACT1f0';
        const chatId = '-4164289239';

        const message = `Нове повідомлення:\nІм'я: ${name}\nТелефон: ${phone}\nEmail: ${email}`;

        fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: chatId,
                text: message
            })
        })
            .then(response => response.json())
            .then(data => console.log('Message sent:', data))
            .catch(error => console.error('Error:', error));
    });
});
