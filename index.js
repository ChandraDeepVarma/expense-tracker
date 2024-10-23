// index.js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./db");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Import routes
const transactionRoutes = require("./routes/transactions");
const categoryRoutes = require("./routes/categories");

// Use routes
app.use("/transactions", transactionRoutes);
app.use("/categories", categoryRoutes);

// Summary endpoint for total income and expenses
app.get("/summary", (req, res) => {
  const summaryQuery = `SELECT 
          SUM(CASE WHEN type='income' THEN amount ELSE 0 END) AS totalIncome,
          SUM(CASE WHEN type='expense' THEN amount ELSE 0 END) AS totalExpenses 
       FROM transactions`;

  db.get(summaryQuery, [], (err, row) => {
    if (err) {
      return res.status(500).json({ error: "Error fetching summary" });
    }
    const balance = row.totalIncome - row.totalExpenses;
    row.balance = balance;
    res.json(row);
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
