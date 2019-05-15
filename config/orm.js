// Import MySQL connection.
var connection = require("../config/connection.js");

// ORM Object for SQL statement functions
var orm = {
  selectAll: function (table, cb) {
    var queryString = "SELECT * FROM " + table + ";";
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      };
      cb(result);
    })
  },
  insertOne: function (table, cols, vals, cb) {
    var queryString = `INSERT INTO ${table} (${cols.toString()}) VALUES (?, ?)`;

    connection.query(queryString, vals, function (err, result) {
      if (err) {
        throw err;
      };

      cb(result);
    })
  },
  updateOne: function (table, condition, cb) {
    var queryString = `UPDATE ${table} SET devoured=true WHERE ${condition}`;

    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      };

      cb(result);
    });
  }
};


// Export ORM
module.exports = orm;