const adminAuth = (req, res, next) => {
  console.log("Admin auth is getting checked!!");
  //Logic of checking if the request is authorized
  const token = "req.body?.token";
  const isAdminAuthorized = token === "req.body?.token";
  if (isAdminAuthorized) {
    next();
  } else {
    res.status(401).send("Unauth request");
  }
};

const userAuth = (req, res, next) => {
  console.log("User auth is getting checked!!");
  //Logic of checking if the request is authorized
  const token = "req.body?token";
  const isAdminAuthorized = token === "req.body?.token";
  if (isAdminAuthorized) {
    next();
  } else {
    res.status(401).send("Unauth request");
  }
};

module.exports = {
  adminAuth,
  userAuth,
};
