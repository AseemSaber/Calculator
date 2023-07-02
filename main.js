
/////////// Get the output element from the HTML///////////////////////
var output = document.getElementById("result");

////////////////// Variable to store the entered equation///////////////
var equationEntered = "";

//////////////////// Function to display a number or operator on the calculator output//////////////////
function display(num) {
  // ////////////////Check if the output is currently displaying an error message//////////////////
  // If it is, clear the output before adding the new input
    if (output.value === "Error") {
    output.value = "";
}

  // ///////////////////Check if an equation has been entered previously////////////////////////////
  // If it has, clear the output before adding the new input
    if (equationEntered) {
    output.value = "";
    equationEntered = false;
}

  ////////////////////// Add the clicked number or operator to the output///////////////////////////
    output.value += num;
}

///////////////////////// Function to clear the calculator output//////////////////////////////////
function Clear() {
    output.value = "";
    equationEntered = "";
}

/////////////////////////////// Function to delete the last character from the calculator output//////////
function Delete() {
    output.value = output.value.slice(0, -1);
}

/////////////////// Function to evaluate the entered equation and display the result//////////////////////
function calc() {
    try {
    output.value = eval(output.value);
    equationEntered = output.value;
    } catch (error) {
    ///////////////////// Display an error word if the entry is not understood//////////////////////////////
    output.value = "Error";
    equationEntered = "";
}
}







