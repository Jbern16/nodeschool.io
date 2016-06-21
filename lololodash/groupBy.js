var _ = require("lodash")

var worker = function(collection){
  var grouped = _.groupBy(collection, "username")
  var pairs = _.map(grouped, function(values, key){
    var count = _.size(values);
    return {
      username: key,
      comment_count: count
    }
  });

  return _.sortBy(pairs, function(pair){
    return -(pair.comment_count);
  });
};

module.exports = worker