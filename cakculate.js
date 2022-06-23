function add(y,z) {
    return y+z;
}
function substraction(y,z) {
    return y-z;
}
function multiply(y,z) {
    return y*z;
}
function divide(y,z) {
    return y/z
}


function calculate(){
    var y = parseInt(prompt("Enter first number"));
    var z = parseInt(prompt("Enter second number"));
    var operator = prompt ("Enter operator from the list below:+,-,*,/")
    var result;
    switch(operator) {
        case "+":
            result = add(y,z);
            break;
            case "-":
                result=substraction(y,z);
                break;
                case "*":
                    result = multiply(y,z);
                    break;
                    case "/":
                        result = divide(y,z);
                        break;
    }
    alert(result)
}
calculate();