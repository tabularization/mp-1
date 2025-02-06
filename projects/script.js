function setOutput(result) {
  let output = document.getElementById("output");
  output.innerHTML = result;
  output.style.color = result < 0 ? "red" : "#000b15";
}

function addition() {
  let input1 = Number(document.getElementById("num1").value);
  let input2 = Number(document.getElementById("num2").value);

  if (input1 && input2) {
    setOutput(input1 + input2);
  }
}

function subtraction() {
  let input1 = Number(document.getElementById("num1").value);
  let input2 = Number(document.getElementById("num2").value);

  if (input1 && input2) {
    setOutput(input1 - input2);
  }
}
function multiplication() {
  let input1 = Number(document.getElementById("num1").value);
  let input2 = Number(document.getElementById("num2").value);

  if (input1 && input2) {
    setOutput(input1 * input2);
  }
}

function division() {
  let input1 = Number(document.getElementById("num1").value);
  let input2 = Number(document.getElementById("num2").value);

  if (input1 && input2) {
    setOutput(input1 / input2);
  }
}

function power() {
  let input1 = document.getElementById("num1").value;
  let input2 = document.getElementById("num2").value;
  if (input1 && input2) {
    let acc = 1;
    for (let i = 0; i < Number(input2); i++) {
      acc *= Number(input1);
    }
    output.style.color = acc < 0 ? "red" : "#000b15";
    output.innerHTML = acc;
  }
}

function del() {
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
  let output = document.getElementById("output");
  output.innerHTML = "";
  output.style.color = "black";
}
