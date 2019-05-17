var orm = require('../config/orm');

// Call the functions stored in the ORM file
var burger = {
  selectAll: function (cb) {
    orm.selectAll("burgers", function (res) {
      cb(res);
    });
  },
  insertOne: function (cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, function (res) {
      cb(res);
    });
  },
  updateOne: function (updatedValues, condition, cb) {
    orm.updateOne("burgers", updatedValues, condition, function (res) {
      cb(res);
    });
  }
};

module.exports = burger;