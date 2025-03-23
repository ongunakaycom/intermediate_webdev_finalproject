// Function to calculate simple interest
function calculateSimpleInterest(principal, rate, time) {
    return (principal * rate * time) / 100;
}

// Function to calculate total payable amount (correct logic)
function calculateTotalAmount(principal, interest) {
    return principal + interest; // Correct logic to add interest
}

// Function with incorrect logic for calculating total amount (as per instructions)
function calculateWithFaultyLogic(principal, interest) {
    return principal - interest; // Incorrect logic for demonstration
}

// Main calculation function
function compute() {
    const principal = Number(document.getElementById("principal").value);
    const rate = Number(document.getElementById("rate").value);
    const years = Number(document.getElementById("years").value);
  
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

// Bind the button click event to the compute function
document.getElementById('calculateButton').addEventListener('click', compute);

// Export functions for testing purposes (e.g., Jasmine)
if (typeof module !== 'undefined') {
    module.exports = { calculateSimpleInterest, calculateTotalAmount, calculateWithFaultyLogic, compute };
}
