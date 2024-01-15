const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors"); // Import the cors middleware

const app = express();
const port = 3000;

// Use bodyParser middleware to parse JSON requests
app.use(bodyParser.json());
app.use(cors());

const users = [
  {
    id: 1,
    username: "Mihai",
    password: "Fragrance",
    token: null,
  },
  {
    id: 2,
    username: "Maria",
    password: "Lake",
    token: null,
  },
];

app.post("/login", (req, res) => {
  // Check if the request body contains 'num1' and 'num2'
  if (req.body && req.body.username && req.body.password) {
    const foundUser = users.find(
      (user) =>
        user.username === req.body.username &&
        user.password === req.body.password
    );
    if (foundUser) {
      const token = (Math.random() + 1).toString(36).substring(7);
      foundUser.token === token;
      res.json({ token: token });
    } else {
      return res.status(401).json({ error: "Unathorized user" });
    }
  } else {
    res.status(400).json({ error: "Missing parameters in request body" });
  }
});

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
