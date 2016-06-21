var _ = require("lodash")

var worker = function(collection){
  var sum = _.chain(collection)
    .map("income")
    .reduce(function(sum, income){
      return sum + income
    }, 0)
  
  var quantity = _.size(collection)

  var average = function(sum, quantity){
    return sum / quantity 
  }

  var underperform = _.chain(collection) 
    .filter(function(values, key){
      return values.income <= average(sum, quantity) 
    })
    .sortBy("income")

  var overperform = _.chain(collection) 
    .filter(function(values, key){
      return values.income > average(sum, quantity) 
    })
    .sortBy("income")

  return {
    "average": average(sum, quantity),
    "underperform": underperform,
    "overperform": overperform
  } 
}

module.exports = worker;