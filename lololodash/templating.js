var _ = require("lodash")

var worker = function(collection) {

  var login_count =  collection.login.length
    
  var template = _.template('Hello <%= name %> (logins: <%= count %>)')({ count : login_count, 
                                                                          name  : collection.name})
  return template
}



//  { name: "Foo",
//       login: [ 1407574431, 140753421 ]
//     }

module.exports = worker;