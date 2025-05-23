const display = document.getElementById("display");

// Append input to display
function appendTodisplay(input) {
    display.value += input;
}

// Clear the display
function clearDisplay() {
    display.value = "";
}

// Add brackets (toggle between '(' and ')')
function bracket() {
    // Count open and close brackets
    const open = (display.value.match(/\(/g) || []).length;
    const close = (display.value.match(/\)/g) || []).length;
    if (open === close || display.value.slice(-1).match(/[\+\-\*\/\(]/)) {
        display.value += '(';
    } else {
        display.value += ')';
    }
}

// Calculate the result
function calculate() {
    try {
        // Prevent eval on empty string
        if (display.value.trim() === "") return;
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}