const convertToFButton = document.getElementById("convertToF");
const convertToCButton = document.getElementById("convertToC");
const celsiusInput = document.getElementById("celsius");
const resultElement = document.getElementById("result");

convertToFButton.addEventListener("click", () => {
    const celsius = parseFloat(celsiusInput.value);
    if (!isNaN(celsius)) {
        const fahrenheit = celsius * 9 / 5 + 32;
        resultElement.textContent = `Result: ${celsius}°C is ${fahrenheit.toFixed(2)}°F`;
    }
});

convertToCButton.addEventListener("click", () => {
    const fahrenheit = parseFloat(celsiusInput.value);
    if (!isNaN(fahrenheit)) {
        const celsius = (fahrenheit - 32) * 5 / 9;
        resultElement.textContent = `Result: ${fahrenheit}°F is ${celsius.toFixed(2)}°C`;
    }
});
