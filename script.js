const display = document.getElementById('display');
let digits = '';

function limitString(string) {
    if (string.length > 15) {
        return string.substring(string.length - 15);
    }
    return string;
}

function addToDisplay(value) {
    digits += value;
    digits = limitString(digits);
    display.innerText = digits;
}

function calculate() {
    try {
        const newDigits = eval(digits);
        display.innerText = newDigits;
        digits = newDigits;
    } catch (error) {
        display.innerText = 'Error';
        digits = '';
    }
}

function clearDisplay() {
    display.innerText = '';
    digits = '';
}

function deleteDigit() {
    digits = digits.slice(0, -1);
    display.innerText = digits;
}
