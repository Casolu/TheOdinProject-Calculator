


let displayValue = "";
let subTotal = null;
let lastOperant = "";
let input;

const displayObj = document.querySelector(".Display");



function stringToFloat(string) {
    return parseFloat(string);
}

function add(num1 ,num2) {
    return num1 + num2;
};

function subtract(num1, num2) {
    return num1 - num2;
};

function multiply(num1, num2) {
    return num1 * num2;
};

function divide(num1, num2) {
    return num1 / num2;
};

function operate(num1, num2, operator) {
    switch (operator) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
        default:
            console.log("error operate()");
            break;
    };
};

function addToDisplay(value) {
    displayValue = displayValue + value; 
    displayObj.innerText = displayValue;
};

function display(text) {
    displayObj.innerText = text;
};

let btn = document.querySelectorAll("button");
btn.forEach(function(e) {
    e.addEventListener("click", function () {
        
        if (stringToFloat(e.innerText) <= 10) {
                addToDisplay(e.innerText);
        };

        switch (e.innerText) {
            case ".":
                if (displayValue.includes(".")) {break;};
                addToDisplay(".");
                break;

            case "+":
            case "-":
            case "*":
            case "/":
                lastOperant = e.innerText;
                input = stringToFloat(displayObj.innerText);

                if (subTotal === null) {
                    subTotal = input;
                } else { 
                    subTotal = operate(subTotal, input, e.innerText);
                };

                displayValue = "";
                display(displayValue);

                console.log("input: " + input);
                console.log(e.innerText);
                break;
        
            case "=":
                if (lastOperant === "") {break};
                input = stringToFloat(displayObj.innerText);
                console.log(lastOperant === "/" && input == 0);
                if (lastOperant === "/" && input == 0) {display("err (can't divivde by 0!)"); break};
                subTotal = operate(subTotal, input, lastOperant);
                console.log(subTotal);
                display(Math.round(subTotal * 10000) / 10000);
                clear();
                break;

            case "CLR":
                clear();
                display(displayValue);
                break;

            case "BCKSPC":
                displayValue = displayValue.slice(0, -1);
                display(displayValue);
                break;

            default:
                break;
        }

        
        console.log("displayVal: " + displayValue);
        console.log("sub: " + subTotal);
    });
});

function clear() {
    subTotal = null;
    displayValue = "";
    lastOperant = "";
};


