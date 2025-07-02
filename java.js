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
    // Replace math functions with Math equivalents
    expression = expression.replace(/sin\(/g, "Math.sin(");
    expression = expression.replace(/cos\(/g, "Math.cos(");
    expression = expression.replace(/tan\(/g, "Math.tan(");
    expression = expression.replace(/log10\(/g, "Math.log10(");
    expression = expression.replace(/Math.sqrt\(/g, "Math.sqrt(");
    expression = expression.replace(/PI/g, "Math.PI");
    expression = expression.replace(/E/g, "Math.E");
    expression = expression.replace(/\^/g, "**"); // support for exponentiation

    // Optional: Convert degrees to radians for trig functions
    expression = expression.replace(/Math\.sin\(([^)]+)\)/g, "Math.sin($1 * Math.PI / 180)");
    expression = expression.replace(/Math\.cos\(([^)]+)\)/g, "Math.cos($1 * Math.PI / 180)");
    expression = expression.replace(/Math\.tan\(([^)]+)\)/g, "Math.tan($1 * Math.PI / 180)");

    let result = eval(expression);
    display.value = result;
  } catch (e) {
    alert("Invalid expression");
    display.value = '';
  }
}
