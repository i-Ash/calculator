// Function to add a character to the display
let display = document.querySelector('.display');
display.value = "";

function addToDisplay(char) {
    if(display.value === '0' && char === '0'){
        return;
    }
     display.value += char;
     display.innerText = display.value;
}

// Function to clear the display
function clearDisplay() {
    display.value = "";
    display.innerText = " " ;
}

// Function to evaluate the expression in the display
function calculate() {
    let expression = display.value;
    display.value = "";
    try {
        let result = eval(expression); 
        addToDisplay(`${result}`);
    } catch (error) {
        display.innerText = 'Error';
    }
}

function signChange(){
    display.value *= -1;
    display.innerText = display.value;
}

function deleteDisplay(){
    let d = display.value.slice(0,-1);
    display.value = d;
    display.innerText = display.value;
}