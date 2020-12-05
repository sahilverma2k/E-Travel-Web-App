const passport = require("passport");
const express = require("express");
const router = express.Router();

const {
  createUser,
  logOut,
  loginUser,
  updateUser,
  googleLogin,
  getLoggedInUser,
  facebookLogin,
} = require("../controllers/usersController");

router.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);
router.get("/auth/facebook", passport.authenticate("facebook"));
router.get("/success", getLoggedInUser);
router.post("/register", createUser);
router.post("/login", passport.authenticate("local"), loginUser);
router.get(
  "/auth/google/redirect",
  passport.authenticate("google"),
  googleLogin
);
router.get(
  "/auth/facebook/callback",
  passport.authenticate("facebook"),
  facebookLogin
);
router.get("/logout", logOut);
router.put("/:id", updateUser);

module.exports = router;
