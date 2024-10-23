// models/transactionModel.js
const db = require("../db");

const Transaction = {
  create: (transaction, callback) => {
    const { type, category, amount, date, description } = transaction;
    db.run(
      `INSERT INTO transactions (type, category, amount, date, description) VALUES (?, ?, ?, ?, ?)`,
      [type, category, amount, date, description],
      function (err) {
        callback(err, this.lastID);
      }
    );
  },
  getAll: (callback) => {
    db.all(`SELECT * FROM transactions`, [], callback);
  },
  getById: (id, callback) => {
    db.get(`SELECT * FROM transactions WHERE id = ?`, [id], callback);
  },
  update: (id, transaction, callback) => {
    const { type, category, amount, date, description } = transaction;
    db.run(
      `UPDATE transactions SET type = ?, category = ?, amount = ?, date = ?, description = ? WHERE id = ?`,
      [type, category, amount, date, description, id],
      function (err) {
        callback(err);
      }
    );
  },
  delete: (id, callback) => {
    db.run(`DELETE FROM transactions WHERE id = ?`, [id], function (err) {
      callback(err);
    });
  },
};

module.exports = Transaction;
