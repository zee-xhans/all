function btnValue(value) {
  document.getElementById('inpute').value += value;
}

function btnResult() {
  document.getElementById("inpute").value = 
  eval(document.getElementById("inpute").value);
}

function btnReset() {
  document.getElementById("inpute").value = ("");
}

