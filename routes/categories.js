// routes/categories.js
const express = require("express");
const router = express.Router();
const Category = require("../models/categoryModel");

// Create a new category
router.post("/", (req, res) => {
  const { name, type } = req.body;
  Category.create(name, type, (err, id) => {
    if (err) return res.status(400).json({ error: err.message });
    res.status(201).json({ id });
  });
});

// Get all categories
router.get("/", (req, res) => {
  Category.getAll((err, rows) => {
    if (err) return res.status(400).json({ error: err.message });
    res.json(rows);
  });
});

module.exports = router;
