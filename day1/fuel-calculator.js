const allModules = require('./all-modules');

const totalFuel = () => {
    // let totalFuel = 0
    // allModules.forEach((fuelModule) => {
    //     totalFuel += (fuelModule)
    // });
    // Below is the same as doing the above but using 'Reduce' which bakes in the summing part
    // return allModules.reduce( (totalFuel, fuelModule) => {
    //     return totalFuel + fuelRequired(fuelModule);
    // }, 0);

    return allModules.reduce( (totalFuel, fuelModule) => totalFuel + fuelRequired(fuelModule), 0);
}

function fuelRequired(mass) {
    return Math.floor(mass / 3) - 2
  }

  module.exports = {
    fuelRequired,
    totalFuel
  }

 

//   arr.forEach(callback(currentValue [, index [, array]])[, thisArg]);