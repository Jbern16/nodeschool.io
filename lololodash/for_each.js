var _ = require("lodash");

var worker = function(cities) {
  var cities_with_size = _.forEach(cities, function(city){
    if(city.population >= 1.0)
      city.size = "big"
    else if (city.population > 0.5)
      city.size = "med"
    else
      city.size = "small"
  })
  return cities_with_size
};

module.exports = worker