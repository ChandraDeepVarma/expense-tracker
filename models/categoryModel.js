// models/categoryModel.js
const db = require("../db");

const Category = {
  create: (name, type, callback) => {
    db.run(
      `INSERT INTO categories (name, type) VALUES (?, ?)`,
      [name, type],
      function (err) {
        callback(err, this.lastID);
      }
    );
  },
  getAll: (callback) => {
    db.all(`SELECT * FROM categories`, [], callback);
  },
};

module.exports = Category;
