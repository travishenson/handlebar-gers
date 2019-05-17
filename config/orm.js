// Import MySQL connection.
var connection = require("../config/connection.js");

// Function to convert object to string for SQL query
function objToStr(obj) {
  var objArr = Object.entries(obj);

  var objStr = '';

  var key = objArr[0][0];
  var value = objArr[0][1];

  objStr = key + ' = ' + value;

  return objStr;
}

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
  updateOne: function (table, updatedValues, condition, cb) {
    var objStr = objToStr(updatedValues);

    var queryString = `UPDATE ${table} SET ${objStr} WHERE ${condition}`;

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