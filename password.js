


document.addEventListener('DOMContentLoaded', function() {
    const generateBtn = document.getElementById('generateBtn');
    const copyBtn = document.getElementById('copyBtn');
    const passwordInput = document.getElementById('password');
    const lengthInput = document.getElementById('length');

    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const specialChars = '!@#$%^&*()-_=+[{]}|;:,<.>/?';

    generateBtn.addEventListener('click', function() {
        const length = parseInt(lengthInput.value);
        const includeLowercase = confirm('Include lowercase letters?');
        const includeUppercase = confirm('Include uppercase letters?');
        const includeNumbers = confirm('Include numbers?');
        const includeSpecialChars = confirm('Include special characters?');

        let chars = '';
        if (includeLowercase) chars += lowercaseLetters;
        if (includeUppercase) chars += uppercaseLetters;
        if (includeNumbers) chars += numbers;
        if (includeSpecialChars) chars += specialChars;

        let password = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * chars.length);
            password += chars[randomIndex];
        }

        passwordInput.value = password;
    });

    copyBtn.addEventListener('click', function() {
        passwordInput.select();
        document.execCommand('copy');
        alert('Password copied to clipboard!');
    });
});
