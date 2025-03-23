// Function to calculate simple interest
function calculateSimpleInterest(principal, rate, time) {
    return (principal * rate * time) / 100;
}

// Function to calculate total payable amount (correct logic)
function calculateTotalAmount(principal, interest) {
    return principal + interest; // Correct logic to add interest
}

// Function with incorrect logic for calculating total amount (for demonstration)
function calculateWithFaultyLogic(principal, interest) {
    return principal - interest; // Incorrect logic for demonstration
}

// Main calculation function
function compute() {
    // Get values from the input fields
    const principal = Number(document.getElementById("principal").value);
    const rate = Number(document.getElementById("rate").value); // Get interest rate
    const years = Number(document.getElementById("years").value); // Get number of years
  
    // Validate inputs to ensure they're numbers and not NaN
    if (isNaN(principal) || isNaN(rate) || isNaN(years)) {
        alert("Please enter valid numeric values for all fields.");
        return;
    }
  
    // Calculate simple interest
    const interest = calculateSimpleInterest(principal, rate, years);
  
    // Correct total amount
    const totalAmount = calculateTotalAmount(principal, interest);
  
    // Incorrect total amount (for demonstration)
    const faultyAmount = calculateWithFaultyLogic(principal, interest);
  
    // Display correct results
    const result = document.getElementById("result");
    result.innerHTML = `
        <div>Principal Amount: <span>${principal.toFixed(2)}</span></div>
        <div>Total Interest: <span>${interest.toFixed(2)}</span></div>
        <div>Total Amount (Correct): <span>${totalAmount.toFixed(2)}</span></div>
        <div>Total Amount (Faulty): <span>${faultyAmount.toFixed(2)}</span></div>
    `;
}

// Function to update the rate display dynamically as the slider is moved
function updateSliderValue() {
    const slider = document.getElementById("rate");
    const sliderValue = document.getElementById("sliderValue");
    sliderValue.innerText = `${slider.value}%`;
}

// Bind the button click event to the compute function
document.getElementById('calculateButton').addEventListener('click', compute);

// Bind the rate slider to update the displayed value dynamically
document.getElementById("rate").addEventListener("input", updateSliderValue);

// Initialize the slider display on page load
document.addEventListener("DOMContentLoaded", updateSliderValue);

// Export functions for testing purposes (e.g., Jasmine)
if (typeof module !== 'undefined') {
    module.exports = { calculateSimpleInterest, calculateTotalAmount, calculateWithFaultyLogic, compute };
}
