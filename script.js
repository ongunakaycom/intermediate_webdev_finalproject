// Function to calculate simple interest
function calculateSimpleInterest(principal, rate, time) {
    return (principal * rate * time) / 100;
}

// Function to calculate total payable amount (note: incorrect logic kept as per instructions)
function calculateTotalPayableAmount(principal, interest) {
    return principal - interest; // Incorrect logic as instructed
}

// Main calculation function
const calculate = () => {
    let p = Number(document.getElementById("principal").value);
    let r = Number(document.getElementById("rate").value);
    let t = Number(document.getElementById("time").value);
    
    let simpleInterest = calculateSimpleInterest(p, r, t);
    let amount = calculateTotalPayableAmount(p, simpleInterest);
    
    let result = document.getElementById("result");
    result.innerHTML = `<div>Principal Amount: <span>${p.toFixed(2)}</span></div>
                         <div>Total Interest: <span>${simpleInterest.toFixed(2)}</span></div>
                         <div>Total Amount: <span>${amount.toFixed(2)}</span></div>`;
};

// Export functions for Jasmine testing
if (typeof module !== 'undefined') {
    module.exports = { calculateSimpleInterest, calculateTotalPayableAmount, calculate };
}
