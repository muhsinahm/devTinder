const express = require("express");

const app = express();

//it is necessary, it will handle errors in all routes
app.use("/", (err, req, res, next) => {
  if (err) {
    res.status(500).send("something went wrong"); //order will not matter here because Erro is thrown in app.get call
    // so it will be shown here only
  }
}); //order of parameters matter here in all cases, 2,3,4 parameters

app.get("/getUserData", (req, res) => {
  try {
    //logic of DB call and get user data
    throw new Error("Error is here");
    res.send("User Data Sent");
  } catch (err) {
    res.status(500).send("Some Error contact support team");
  }
});

// const { adminAuth, userAuth } = require("./middlewares/auth");

// app.use("/admin", adminAuth);
// app.use("/user", userAuth, (req, res) => {
//   res.send("User Data Sent");
// });

// app.post("/user/login", (req, res) => {
//   res.send("User logged in successfully!");
// });

// app.post("/user/data", (req, res) => {
//   res.send("User logged in successfully!");
// });
// app.get("/admin", (req, res, next) => {
//   console.log("Admin auth is getting checked!!");
//   //Logic of checking if the request is authorized
//   const token = "req.body?.token";
//   const isAdminAuthorized = token === "req.body?.token";
//   if (isAdminAuthorized) {
//     next();
//   } else {
//     res.status(401).send("Unauth request");
//   }
// });

// app.get("/user", (req, res) => {
//   res.send("User Data Sent");
// });

app.get("/admin/deleteUser", (req, res) => {
  res.send("Delete a user");
});

// app.use(
//   "/user",
//   (req, res, next) => {
//     console.log("Handling");
//     next();
//     // res.send("Response!!");
//   },
//   (req, res, next) => {
//     // res.send("2nd Response!!");
//     next();
//   },
//   (req, res, next) => {
//     // res.send("3rd Response!!");
//     next();
//   },
//   (req, res, next) => {
//     // res.send("4th Response!!");
//     next();
//   }
// );
//request handlers
//order of code matters here

// app.use("/hello", (req, res) => {
//   res.send("Hello   from the server!");
// });

// app.use("/user", (req, res) => {
//   res.send("Updated Homing from the server!");
// });

//this will handle only GET calls to /user, it can match /user, user/xyz, user/1
// app.get("/user/:userId", (req, res) => {
//   console.log(req.params);
//   res.send({ firstName: "Muhsin", lastName: "Ali" });
// });

// app.post("/user", (req, res) => {
//   // saving data to DB
//   // console.log("Save Data to the database");
//   res.send("Data successfully saved to the database");
// });

// app.delete("/user", (req, res) => {
//   res.send("Deleted successfully!");
// });

//this will macth all HTTP method API calls to /test
// app.use("/test", (req, res) => {
//   res.send("Testing from the server!");
// });

app.listen(7777, () => {
  console.log("Server is successfully listening on port 7777...");
});
