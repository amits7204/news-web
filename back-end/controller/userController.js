const bcrypt = require("bcryptjs");
const express = require("express");
const patient = require("../patient");
const { registerValidation, loginValidation } = require("../validation");
const User = require("../models/User");

const addUsers = async (req, res, next) => {
  const { error } = registerValidation(req.body);
  if (error) {
    res.status(400).send(error.details[0].message);
  }

  const emailExists = await User.findOne({ email: req.body.email });
  if (emailExists) {
    return res.status(400).send("Email already exists in the database");
  }

  const hashedPassword = await bcrypt.hash(
    req.body.password,
    await bcrypt.genSalt(10)
  );
  const user = new User({
    fname: req.body.fname,
    lname: req.body.lname,
    age: req.body.age,
    email: req.body.email,
    gender: req.body.gender,
    password: hashedPassword,
  });

  try {
    const savedUser = await user.save();
    res.send(savedUser);
  } catch (err) {
    res.status(400).send(err);
  }
};

const loginUser = async (req, res, next) => {
  const { error } = loginValidation(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  console.log(req.body.email);
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return res.status(400).send("Email or password is wrong");
  }
  console.log(req.body.password);
  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass) return res.status(400).send("Invalid password");

  res.send("logged in");
};

const getPatient = async (req, res, next) => {
  res.status(200).json(patient);
};

const updatePatient = async (req, res, next) => {
  const id = req.params.id;
  console.log("ID: ", req.body.fname);
  const index = patient.findIndex((patient) => {
    return patient.id == Number.parseInt(id);
  });

  if (index >= 0) {
    const updatedpatient = patient[index];
    updatedpatient.first_name = req.body.fname;
    updatedpatient.last_name = req.body.lname;
    updatedpatient.age = req.body.age;
    updatedpatient.email = req.body.email;
    updatedpatient.gender = req.body.gender;
    res.status(200).json(updatedpatient);
  } else {
    res.status(404).json({ error: "Updation of student failed" });
  }
};

module.exports = { addUsers, loginUser, getPatient, updatePatient };
