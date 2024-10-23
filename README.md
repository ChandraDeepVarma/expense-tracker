# Personal Expense Tracker API

## Setup Instructions

1. Clone the repository.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.
4. Start the server with `node index.js`.

## API Endpoints

### Transactions

- **POST /transactions**
  - Request Body:

```json
{
  "type": "income",
  "category": "salary",
  "amount": 1000,
  "date": "2024-10-01",
  "description": "Monthly salary"
}
```
"# expense-tracker" 
