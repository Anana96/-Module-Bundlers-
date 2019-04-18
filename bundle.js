(modules => {
    const require = id => {
      const { factory, map } = modules[id]
      const localRequire = name => require(map[name])
      const module = { exports: {} }

      factory(module, localRequire)

      return module.exports
    }

    require(0)
  })({ 0: {
      factory: (module, require) => {
        const converter = require('./convertDegrees')

const celsius = 0

const fahrenheit = converter.convertCelsiusToFahrenheit(celsius)

console.log(fahrenheit)

      },
      map: {"./convertDegrees":1}
    },1: {
      factory: (module, require) => {
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

      },
      map: {"./mult":2,"./sum":3,"./divide":4,"./sub":5}
    },2: {
      factory: (module, require) => {
        function mult(a, b) {
  return a * b;
}

module.exports = mult

      },
      map: {}
    },3: {
      factory: (module, require) => {
        function sum(a, b) {
  return a + b;
}

module.exports = sum

      },
      map: {}
    },4: {
      factory: (module, require) => {
        function divide(a, b) {
  return a / b
}

module.exports = divide

      },
      map: {}
    },5: {
      factory: (module, require) => {
        function sub(a, b) {
  return a - b;
}

module.exports = sub
      },
      map: {}
    } })