import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Box } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import { loginRequest } from "../Redux/ActionCreator";

import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { useForm } from "react-hook-form";
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
    marginTop: "15%",
    padding: "5px",
  },
}));

export default function Login() {
  const classes = useStyles();
  const isError = useSelector((state) => state.data.isError);
  console.log("isError: ", isError);
  const disPatch = useDispatch();
  const { register, handleSubmit } = useForm();
  //   console.log("USE: ", useHistory());
  const history = useHistory();
  useEffect(() => {
    if (isError) {
      console.log("dash");
      history.push("/dashboard");
    }
  });
  const handleOnSubmit = (data) => {
    console.log("DATA fun: ", history);
    const { email, password } = data;
    disPatch(loginRequest({ email, password }));
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
          label="Email"
          id="outlined-size-small"
          variant="outlined"
          size="small"
          type="email"
          name="email"
          inputRef={register}
        />
        <br />
        <br />
        <TextField
          label="Password"
          id="outlined-size-small"
          variant="outlined"
          size="small"
          type="password"
          name="password"
          inputRef={register}
        />
        <p style={{ fontSize: "12px", color: "#e74c3c" }}>
          <span
            style={{ fontSize: "12px", color: "GrayText", marginRight: "2px" }}
          >
            if you don't have account please go for
          </span>
          Register
        </p>
        <Button type="submit" variant="outlined" color="default">
          Login
        </Button>
      </form>
    </Box>
  );
}
