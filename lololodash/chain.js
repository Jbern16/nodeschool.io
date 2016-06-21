var _ = require('lodash')

var worker = function(collection){
  var uppers = _.chain(collection)
    .map(function(word){
      return _.toUpper(word + "chained");
    })
    .sortBy();

    return uppers    
}


module.exports = worker