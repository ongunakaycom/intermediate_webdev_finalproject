function compute() 
{
    // Convert inputs to numbers
    let principal = Number(document.getElementById("principal").value);
    let rate = Number(document.getElementById("rate").value);
    let years = Number(document.getElementById("years").value);

    // Validate the principal. If negative or 0, alert user and focus on principal
    if (principal <= 0) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return false;
    }

    // Perform calculations
    let interest = principal * years * rate / 100;
    let endYear = new Date().getFullYear() + years;

    // Compound interest formula
    let compounded = principal * ((1 + ((rate / 100) / 12)) ** (12 * years));

    // Display result
    document.getElementById("result").innerHTML = `If you deposit <mark>${principal.toFixed(2)}</mark>,<br>at an interest rate of 
    <mark>${rate.toFixed(2)}</mark>%.<br>You will receive an amount of <mark>${interest.toFixed(2)}</mark>,<br>in the year <mark>${endYear}</mark><br>
    <br>With monthly compounded interest your balance would instead be <mark>${compounded.toFixed(2)}</mark>`;
}

//display rate % by slider
function rangeReader()
{
    let sliderValue = document.getElementById("rate").value;
    document.getElementById("sliderValue").innerText = `${sliderValue}%`;
}
        