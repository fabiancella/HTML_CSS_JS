// CALCULATOR PROGRAM 

const display = document.getElementById("display"); // calling the display id to give it functionallity

function appendToDisplay(input){ // function for input, input is the parameter
    display.value += input; // adding the input (which is the number selected) to the display (value)
}

function clearDisplay(){
    display.value = ""; // empty string will clear the calcs display

}

function calculate(){
    try{
        display.value = eval(display.value); // this line alone can cause an error. user input number + nothing, will shoot error
    }
    catch(error){
        display.value = "Error";
    }
}