const allModules = require('./all-modules');

// Logic: divide by three, round down, and subtract 2

const totalFuel = () => {
    let totalFuel = 0
    allModules.forEach((fuelModule) => {
     totalFuel += fuelRequired(fuelModule)
    })
  return totalFuel
}

function fuelRequired(mass) {
    return Math.floor(mass / 3) - 2
  }
  module.exports = {
    fuelRequired,
    totalFuel
  }

 

//   arr.forEach(callback(currentValue [, index [, array]])[, thisArg]);