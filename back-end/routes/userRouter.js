const express = require("express");
const router = express.Router();
const { addUsers, loginUser } = require("../controller/userController");
// const { body } = require("express-validator");

console.log("Student data: ", addUsers);

router.post("/register", addUsers);

router.post("/login", loginUser);

module.exports = router;
