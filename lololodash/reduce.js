 var _ = require("lodash");
 
var worker = function(orders) {
    var grouped = _.groupBy(orders, "article")
    
    var overview = [];
    _.forEach(grouped, function (order, name) {
      overview.push({article: parseInt(name), total_orders: _.reduce(order, function (sum, order) {
        return sum + order.quantity;
      }, 0)});
    });
    return _.sortBy(overview, 'total_orders').reverse();
};


 module.exports = worker;


