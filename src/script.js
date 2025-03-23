// Function to calculate simple interest
function compute() {
    var principal = parseFloat(document.getElementById("principal").value);
    var rate = parseFloat(document.getElementById("rate").value);
    var years = parseInt(document.getElementById("years").value);
    
    // Check if principal is valid
    if (isNaN(principal) || principal <= 0) {
        alert("Please enter a positive number for the principal.");
        document.getElementById("principal").focus();
        return;
    }

    // Calculate interest
    var interest = money_round(principal * years * rate / 100);
    
    // Calculate year when the deposit will mature
    var year = new Date().getFullYear() + years;

    // Display result
    var result = document.getElementById("result");
    result.innerText = `If you deposit $${principal},\n` +
                       `at an interest rate of ${rate}%. \n` +
                       `You will receive an amount of $${interest},\n` +
                       `in the year ${year}.`;
}

// Function to round to two decimal places (rounded to nearest value)
function money_round(num) {
    return Math.round(num * 100) / 100; // Rounded to nearest value
}

// Function to update rate value displayed on the slider
function updateRate() {
    var rateVal = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateVal + "%";
}

// Make sure the event listeners are bound to the elements correctly after DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Bind updateRate function to the slider change event
    document.getElementById('rate').addEventListener('input', updateRate);

    // Bind compute function to the button click event
    document.getElementById('calculateButton').addEventListener('click', compute);
});
