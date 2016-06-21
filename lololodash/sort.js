var _ = require("lodash");

var worker = function(args) {
  var sorted = _.sortBy(args, 'quantity');
  return _.reverse(sorted);
};

module.exports = worker