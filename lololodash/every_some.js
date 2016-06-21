var _ = require('lodash')

var worker  = function(towns) {
   
  var filtered_towns = { hot: [], warm: [] };

  function checktemp(temp) {
      return temp > 19;
  }

  _.forEach(towns, function(temp, name) {
      if (_.every(temp, checktemp)) {
          filtered_towns.hot.push(name);
      } else if (_.some(temp, checktemp)) {
          filtered_towns.warm.push(name);
      }
  });

  return filtered_towns;

};

module.exports = worker