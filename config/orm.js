var connection = require("./connections.js");



var orm = {
    selectAll: function(cb) {
      var queryString = "SELECT * FROM burgers";
      connection.query(queryString, function(err, result) {
        if (err) throw err;
        cb(result);
      });
    },
    insertOne: function(burger,cb) {
        var queryString = "INSERT INTO burgers (burgerName) VALUE ('" + burger + "')";
        connection.query(queryString, function(err, result){
            if (err) throw err;
            cb(result);
        })
    },
    updateOne: function(id,cb){
        var queryString = "UPDATE burgers SET devoured=true WHERE id=" + id;
        connection.query(queryString, function(err, result){
            if (err) throw err;
            cb(result);
        })
    }
}

module.exports = orm;