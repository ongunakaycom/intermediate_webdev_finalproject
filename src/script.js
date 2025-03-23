function compute(){
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = money_round(principal * years * rate / 100);
    var year = new Date().getFullYear()+parseInt(years);

    if(isNaN(principal) || principal <= 0){
        alert("Enter a positive number.")
        principal.focus();
        return;
    }

    //to round up to two decimal places
    function money_round(num) {
        return Math.ceil(num * 100) / 100;
    }

    var result = document.getElementById("result");
    return result.innerText = "If you deposit $" + principal + ",\n at an interest rate of " + rate +"%.\n  You will receive an amount of $" + interest + ",\n in the year of " + year;
}
        

//function to read the values of the range slider and display it in the <span> adjacent to the slider
function updateRate(){
    var rateVal = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateVal + "%";
}
        