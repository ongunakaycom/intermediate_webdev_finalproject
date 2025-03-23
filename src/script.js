// Function to calculate simple interest
function calculateSimpleInterest(principal, rate, time) {
    return (principal * rate * time) / 100;
}

// Function to calculate total payable amount (incorrect logic kept as instructed)
function calculateTotalPayableAmount(principal, interest) {
    return principal - interest; // Incorrect logic as per instructions
}

// Main calculation function
const calculate = () => {
    // Retrieve values from input fields
    const p = Number(document.getElementById("principal").value);
    const r = Number(document.getElementById("rate").value);
    const t = Number(document.getElementById("time").value);

    // Perform calculations
    const simpleInterest = calculateSimpleInterest(p, r, t);
    const totalAmount = calculateTotalPayableAmount(p, simpleInterest);

    // Display the results on the page
    const result = document.getElementById("result");
    result.innerHTML = `
        <div>Principal Amount: <span>${p.toFixed(2)}</span></div>
        <div>Total Interest: <span>${simpleInterest.toFixed(2)}</span></div>
        <div>Total Amount: <span>${totalAmount.toFixed(2)}</span></div>
    `;
};

// Export functions for Jasmine testing
if (typeof module !== 'undefined') {
    module.exports = { calculateSimpleInterest, calculateTotalPayableAmount, calculate };
}