function appendValue(value) {
  document.getElementById("display").value += value;
}

function clearDisplay() {
  document.getElementById("display").value = '';
}

function backspace() {
  let display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
}

function calculate() {
  let display = document.getElementById("display");
  let expression = display.value;

  try {
    // Replace sin, cos, tan, log, etc., to use Math functions
    expression = expression.replace(/sin\(/g, "Math.sin(");
    expression = expression.replace(/cos\(/g, "Math.cos(");
    expression = expression.replace(/tan\(/g, "Math.tan(");
    // Optional: convert degrees to radians if needed

    let result = eval(expression);
    display.value = result;
  } catch (e) {
    alert("Invalid expression");
    display.value = '';
  }
}
