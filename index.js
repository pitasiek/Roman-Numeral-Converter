const convertBtn = document.getElementById('convert-btn');
const numberInput = document.getElementById('number');
const result = document.getElementById('output');

// Rules for conversion
let myNumbers = [
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"],
]

convertBtn.addEventListener('click', () => {
    let userInput = numberInput.value;
    // Checks for a valid number
    if (userInput === "" || userInput === "0") {
        result.innerText = "Please enter a valid number";
        result.style.backgroundColor = "hsl(0, 100%, 70%)";
        result.style.color = "white";
    } 
    else if (parseInt(userInput) >= 4000) {
        result.innerText = "Please enter a number less than or equal to 3999";
        result.style.backgroundColor = "hsl(0, 100%, 70%)";
        result.style.color = "white";
    }
    else if (parseInt(userInput) < 0) {
        result.innerText = "Please enter a number greater than or equal to 1";
        result.style.backgroundColor = "hsl(0, 100%, 70%)";
        result.style.color = "white";
    } else {
        // Turns on the function that converts the numbers
        convertNumber(userInput);
    }
})

// Function converts arabic input into roman number
function convertNumber(input) {
    let romanNumerals = "";
    let i = 0;
    // Loops to keep checking until input becomes 0
    while(input > 0) {
        // checks whether the number fits
        if (input >= myNumbers[i][0]) {
            // adds the letter to the string, removes equal number from the input
            romanNumerals += myNumbers[i][1];
            input -= myNumbers[i][0];
        } else {
            // goes through the list to find a number that fits
            i++;
        }
    }
    result.innerText = romanNumerals;
    result.style.backgroundColor = "white";
    result.style.color = "black";
} 