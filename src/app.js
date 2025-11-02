const express = require("express");

const app = express();

//request handlers
app.get("/", (req, res) => {
  res.send("Homing from the server!");
});
app.get("/hello", (req, res) => {
  res.send("Hello   from the server!");
});
app.get("/test", (req, res) => {
  res.send("Testing from the server!");
});
app.listen(7777, () => {
  console.log("Server is successfully listening on port 7777...");
});
