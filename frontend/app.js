const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const path = require("path");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Serve form
app.get("/", (req, res) => {
  res.render("form");
});

// Handle form submission
app.post("/submit", async (req, res) => {
  try {
    const response = await axios.post("http://127.0.0.1:5000/process", req.body);
    res.send(`<h2>Response from Flask:</h2><p>${JSON.stringify(response.data)}</p>`);
  } catch (error) {
    res.status(500).send("Error communicating with backend");
  }
});

app.listen(3000, () => {
  console.log("✅ Frontend running at http://localhost:3000");
});
