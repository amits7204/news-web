import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Box } from "@material-ui/core";
import { useForm } from "react-hook-form";

import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { postDoctor } from "../Redux/ActionCreator";
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200,
    },
  },
  box: {
    border: "1px solid #e74c3c",
    borderRadius: "6px",
    margin: "auto",
    width: 350,
    textAlign: "center",
    marginTop: "10%",
    padding: "5px",
  },
}));

export default function Login() {
  const classes = useStyles();
  const disPatch = useDispatch();
  const history = useHistory();
  const { register, handleSubmit } = useForm();
  const handleOnSubmit = (data) => {
    console.log("DATA fun: ", data);
    const { fname, lname, age, email, gender, password } = data;
    console.log(fname);
    disPatch(postDoctor({ fname, lname, age, email, gender, password }));
    // history.goBack();
  };
  return (
    <Box className={classes.box}>
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit(handleOnSubmit)}
      >
        <TextField
          label="First Name"
          id="outlined-size-small"
          variant="outlined"
          size="small"
          type="text"
          name="fname"
          inputRef={register}
        />
        <br />
        <TextField
          label="Last Name"
          id="outlined-size-small"
          variant="outlined"
          size="small"
          name="lname"
          type="text"
          inputRef={register}
        />
        <br />
        <TextField
          label="Age"
          id="outlined-size-small"
          variant="outlined"
          size="small"
          name="age"
          type="text"
          inputRef={register}
        />
        <br />
        <TextField
          label="Email"
          id="outlined-size-small"
          variant="outlined"
          size="small"
          name="email"
          type="email"
          inputRef={register}
        />
        <br />
        <TextField
          label="Gender"
          id="outlined-size-small"
          variant="outlined"
          size="small"
          name="gender"
          type="text"
          inputRef={register}
        />
        <br />
        <TextField
          label="Password"
          id="outlined-size-small"
          variant="outlined"
          size="small"
          name="password"
          type="password"
          inputRef={register}
        />
        <br />
        <Button type="submit" variant="outlined" color="default">
          Register
        </Button>
      </form>
    </Box>
  );
}
