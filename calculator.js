var x, y;

function validasi(ob) {
    x = parseFloat(document.getElementById(ob).value);
    if (x) {
        document.getElementById(ob).value = x * 1;
    } else {
        document.getElementById(ob).value = 0;
        alert("Please only input number. I can do regex check but it wouldn't be 'basic' javascript.");
    }

}
function count(operator) {
    event.preventDefault();
    x = parseFloat(document.getElementById("operand1").value);
    y = parseFloat(document.getElementById("operand2").value);
    if (operator == 1) {
        document.getElementById("result").value = x + y;
    } else if (operator == 2) {
        document.getElementById("result").value = x - y;
    } else if (operator == 3) {
        document.getElementById("result").value = x * y;
    } else if (operator == 4) {
        document.getElementById("result").value = x / y;
    }
}