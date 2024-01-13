const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors"); // Import the cors middleware

const app = express();
const port = 5000;

// Use bodyParser middleware to parse JSON requests
app.use(bodyParser.json());
app.use(cors());

// POST endpoint to calculate the sum
app.post("/sum", (req, res) => {
  // Check if the request body contains 'num1' and 'num2'
  if (req.body && req.body.number1 && req.body.number2) {
    // Parse numbers from request body
    const num1 = parseFloat(req.body.number1);
    const num2 = parseFloat(req.body.number2);

    // Check if the parsed values are valid numbers
    if (!isNaN(num1) && !isNaN(num2)) {
      const sum = num1 + num2;
      res.json({ result: sum });
    } else {
      res.status(400).json({ error: "Invalid numbers in request body" });
    }
  } else {
    res.status(400).json({ error: "Missing parameters in request body" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
