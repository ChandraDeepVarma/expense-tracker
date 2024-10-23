// routes/transactions.js
const express = require("express");
const router = express.Router();
const Transaction = require("../models/transactionModel");

// Create a new transaction
router.post("/", (req, res) => {
  Transaction.create(req.body, (err, id) => {
    if (err) return res.status(400).json({ error: err.message });
    res.status(201).json({ id });
  });
});

// Get all transactions
router.get("/", (req, res) => {
  Transaction.getAll((err, rows) => {
    if (err) return res.status(400).json({ error: err.message });
    res.json(rows);
  });
});

// Get transaction by ID
router.get("/:id", (req, res) => {
  Transaction.getById(req.params.id, (err, row) => {
    if (err || !row)
      return res.status(404).json({ error: "Transaction not found" });
    res.json(row);
  });
});

// Update transaction by ID
router.put("/:id", (req, res) => {
  Transaction.update(req.params.id, req.body, (err) => {
    if (err) return res.status(400).json({ error: err.message });
    res.json({ updatedID: req.params.id });
  });
});

// Delete transaction by ID
router.delete("/:id", (req, res) => {
  Transaction.delete(req.params.id, (err) => {
    if (err) return res.status(400).json({ error: err.message });
    res.json({ deletedID: req.params.id });
  });
});

module.exports = router;
