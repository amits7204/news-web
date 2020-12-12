const express = require("express");
const router = express.Router();
const {
  addUsers,
  loginUser,
  getPatient,
  updatePatient,
} = require("../controller/userController");
// const { body } = require("express-validator");

console.log("Student data: ", addUsers);

router.post("/register", addUsers);

router.post("/login", loginUser);

router.get("/getPatient", getPatient);
router.put("/:id", updatePatient);
module.exports = router;
