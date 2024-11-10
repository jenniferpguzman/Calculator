let currentDisplay = "0"; //current content display
let resultDisplay = false;

//function to add to the value of current display
function appendToDisplay(value) {
    if (currentDisplay === "0" || resultDisplay){
        // if current display is "0" replace it with the new value
        currentDisplay = value;
    } else { 
        //otherwise add the new value to current display
        currentDisplay += value;
    }
    // reset the result display 
    resultDisplay = false;
    //update the display to show new content
    updateDisplay();
}

//function to update the current content to display
function updateDisplay() {
    const displayElement = document.getElementById("display");
    displayElement.textContent = currentDisplay;
}
//function to calculate and display the result
function calculateResult() {
    try {
        // using eval() function to evaluate the expression
        const result = eval(currentDisplay);
        //add the result to the current display after clickng the "=" sign
        currentDisplay += "\n=" + result.toString();
        updateDisplay();
    } catch (error){
        //will display an error message if an error is in the expression
        currentDisplay += "\nError";
        updateDisplay();
    }
    //set the result display to true to show that the result is displayed
    resultDisplay = true;
}
//function clearing the last element from current display
function clearLastElement() {
    //remove the last character from the current display using the slice() method
    currentDisplay = currentDisplay.slice(0,-1);
    //set back to "0" if the current display is empty
    if (currentDisplay === "") {
        currentDisplay = "0";
    }
    updateDisplay();
}
//function clearing entire display
function clearDisplay() {
    currentDisplay = "0"; //this will reset it to "0"
    updateDisplay();
}

window.addEventListener("resize", handleOverflow);
handleOverflow();