const mult = require('./mult')
const sum = require('./sum')
const divide = require('./divide')
const sub = require('./sub')

function convertCelsiusToFahrenheit(degrees) {
  return sum(
      mult(degrees, 1.8),
      32
    )
}

function convertFahrenheitToCelsius(degrees) {
  return divide(
    sub(degrees, 32),
    1.8
  )
}

function weDontWannaUseThisFunction() {
  console.log('weDontWannaUseThisFunction!');
}

module.exports = {
  convertCelsiusToFahrenheit: convertCelsiusToFahrenheit,
  convertFahrenheitToCelsius: convertFahrenheitToCelsius
}
