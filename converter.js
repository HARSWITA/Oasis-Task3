const inserter = document.querySelector('#inserter');   // QUERYSELECTOR USED TO SELECT A TAGMIN DOM
const outputer = document.querySelector('.output');
const convert = document.querySelector('.convertButton');
const reset = document.querySelector('.resetButton');
const change = document.querySelector('.changeButton');
const C = document.querySelector('.C');
const F = document.querySelector('.F');
const swap = () => {
  if (C.innerHTML == '°C') {        // innerHTML is used to take value browser to in js code.
    F.innerHTML = '°C';   
    C.innerHTML = '°F';
    inserter.placeholder = 'Temperature in °F';
    inserter.value = ' ';
    outputer.innerHTML = ' ';
  }
  else {
    C.innerHTML = '°C';
    F.innerHTML = '°F';
    inserter.placeholder = 'Temperature in °C';
    inserter.value = ' ';
    outputer.innerHTML = ' ';
  }
}

const reseter = () => {
    inserter.value = ' ';
    outputer.innerHTML = ' ';
}

const converter = () => { 
  if (C.innerHTML == '°F') {
    let formula = (inserter.value - 32) / 1.8;
    outputer.innerHTML = ` ${inserter.value} °F is equal to ${formula.toFixed(2)} °C `;//  {} in python f-strings we use ${} in javascript to indicate a placeholder for variables.
  }
  else{
    let formula = (inserter.value * 1.8) + 32;
    outputer.innerHTML = ` ${inserter.value} °C is equal to ${formula.toFixed(2)} °F ` ;
  }
}
change.addEventListener('click', swap)     // event adder
reset.addEventListener('click', reseter)
convert.addEventListener('click', converter)