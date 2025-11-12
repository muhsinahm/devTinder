const mongoose = require("mongoose");

//mongoose.connect returns us a promise that's why called in async function

// "mongodb+srv://muhsingcu_db_user:Un3TzlLRhP9ZiHaT@cluster0.yk85n77.mongodb.net/" refers to cluster and if we place a name after it i-e
// "mongodb+srv://muhsingcu_db_user:Un3TzlLRhP9ZiHaT@cluster0.yk85n77.mongodb.net/HelloWorld" it will refer to that specific database

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://muhsingcu_db_user:Un3TzlLRhP9ZiHaT@cluster0.yk85n77.mongodb.net/devTinder"
  );
};

module.exports = connectDB;
