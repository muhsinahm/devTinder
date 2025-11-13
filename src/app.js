const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");

app.use(express.json()); //middleware activated for all routes

// app.use("/test", () => {}); will work only for /test route

//app.get("/test", () => {}); will wokr for get and that route
//Ep-06,07 code
// Creating SignUp API
app.post("/signup", async (req, res) => {
  console.log("Req Body", req.body);
  // console.log("Req Body", req.body) will give us undefined bacause postman is sending data in JSON format and our server
  // can't read it, so for that we need to a middleware to convert JSON into JS Object, put into the body
  const userObj = req.body;
  //creating new user (instance) of User Model with userObj data
  const user = new User(userObj);
  //better to wrap db operations in try catch block
  try {
    //data will be saved onto db and promise will be returned
    await user.save();
    res.send("User Added Successfully");
  } catch (err) {
    res.status(400).send("Error saving the user:" + err.message);
  }
});

// Get user by email
app.get("/user", async (req, res) => {
  const userEmail = req.body.emailId;
  console.log("User Email from API", userEmail);
  try {
    const users = await User.find({ emailId: userEmail }); // it will get users with all this given email id and set in an array and sedning back
    console.log("Users with certain email", users);
    if (users.length === 0) {
      res.status(404).send("User not found");
    } else {
      res.send(users);
    }
  } catch (err) {
    res.status(400).send("Something went wrong");
  }
});
// Feed API - GET /feed - get all the users from the database
app.get("/feed", async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (err) {
    res.status(400).send("Something went wrong");
  }
});
connectDB()
  .then(() => {
    console.log("Database connection established...");
    //it should run after DB connection is succesfully beacuse if server is connected and API requests have been established but
    // DB is not connected yet, it may be problemetic

    app.listen(7777, () => {
      console.log("Server is successfully listening on port 7777...");
    });
  })
  .catch((err) => {
    console.error("Database cannot be connected!!");
  });

// Ep-05 code

//it is necessary, it will handle errors in all routes
// app.use("/", (err, req, res, next) => {
//   if (err) {
//     res.status(500).send("something went wrong"); //order will not matter here because Erro is thrown in app.get call
//     // so it will be shown here only
//   }
// }); //order of parameters matter here in all cases, 2,3,4 parameters

// app.get("/getUserData", (req, res) => {
//   try {
//     //logic of DB call and get user data
//     throw new Error("Error is here");
//     res.send("User Data Sent");
//   } catch (err) {
//     res.status(500).send("Some Error contact support team");
//   }
// });

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

// app.get("/admin/deleteUser", (req, res) => {
//   res.send("Delete a user");
// });

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
