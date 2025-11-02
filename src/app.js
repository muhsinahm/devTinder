const express = require("express");

const app = express();

//request handlers
//order of code matters here

// app.use("/hello", (req, res) => {
//   res.send("Hello   from the server!");
// });

app.use("/user", (req, res) => {
  res.send("Updated Homing from the server!");
});

//this will handle only GET calls to /test
app.get("/user", (req, res) => {
  res.send({ firstName: "Muhsin", lastName: "Ali" });
});

app.post("/user", (req, res) => {
  // saving data to DB
  // console.log("Save Data to the database");
  res.send("Data successfully saved to the database");
});

app.delete("/user", (req, res) => {
  res.send("Deleted successfully!");
});

//this will macth all HTTP method API calls to /test
app.use("/test", (req, res) => {
  res.send("Testing from the server!");
});

app.listen(7777, () => {
  console.log("Server is successfully listening on port 7777...");
});
