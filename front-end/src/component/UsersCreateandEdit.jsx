import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { updateUsersData } from "../Redux/ActionCreator";
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200,
      marginTop: 20,
      // border: "1px solid  #e8f5e9",
      // borderRadius: 6,
      backgroundColor: "#a5d6a7",
      borderRadius: 6,
    },
  },
  btn: {
    border: "1px solid #263238",
    borderRadius: 4,
    fontWeight: "bold",
    fontSize: 12,
    color: "#263238",
  },
  card: {
    backgroundColor: "#a5d6a7",
    borderRadius: 6,
    padding: 15,
    width: 500,
    margin: "auto",
    marginTop: 40,
  },
}));

export default function UsersCreateandEdit(state) {
  const classes = useStyles();
  console.log("Props: ", state);
  const dispatch = useDispatch();
  const history = useHistory();
  const { isUpdate } = useSelector((state) => state.data);

  useEffect(() => {
    if (isUpdate) {
      history.goBack();
    }
  });
  const handleOnEditSubmit = (data) => {
    console.log("DATA fun: ", data);
    if (state.location.state !== undefined) {
      const { id } = state.location.state;
      const { fname, lname, age, email, gender } = data;
      console.log(fname);
      dispatch(updateUsersData({ id, fname, lname, age, email, gender }));
    }
  };

  const { register, handleSubmit } = useForm();

  // const handleOnSubmit = (data) => {
  //   console.log("DATA Fun: ", data);
  //   const { fname, group, city, email, avatar, gender } = data;
  //   console.log("fname:", data);
  //   // dispatch(postUsersData({ fname, group, city, email, avatar, gender }));
  // };
  return (
    <>
      <div className={classes.card}>
        <form
          className={classes.root}
          onSubmit={handleSubmit(handleOnEditSubmit)}
        >
          <TextField
            label="Name"
            id="outlined-size-small"
            variant="outlined"
            size="small"
            required={true}
            name="fname"
            defaultValue={
              state.location.state !== undefined
                ? state.location.state.fname
                : ""
            }
            inputRef={register}
          />
          <TextField
            label="Last name"
            id="outlined-size-small"
            variant="outlined"
            size="small"
            name="lname"
            required={true}
            defaultValue={
              state.location.state !== undefined
                ? state.location.state.lname
                : ""
            }
            inputRef={register}
          />
          <TextField
            label="Email"
            id="outlined-size-small"
            variant="outlined"
            size="small"
            name="email"
            required={true}
            defaultValue={
              state.location.state !== undefined
                ? state.location.state.email
                : ""
            }
            inputRef={register}
          />
          <TextField
            label="Age"
            id="outlined-size-small"
            variant="outlined"
            size="small"
            name="age"
            required={true}
            defaultValue={
              state.location.state !== undefined ? state.location.state.age : ""
            }
            inputRef={register}
          />
          <TextField
            label="Gender"
            id="outlined-size-small"
            variant="outlined"
            size="small"
            name="gender"
            required={true}
            defaultValue={
              state.location.state !== undefined
                ? state.location.state.gender
                : ""
            }
            inputRef={register}
          />
          <TextField
            label="Password"
            type="password"
            id="outlined-size-small"
            variant="outlined"
            size="small"
            required={true}
            name="Password"
            defaultValue={
              state.location.state !== undefined
                ? state.location.state.gender
                : ""
            }
            inputRef={register}
          />
          <br />
          <Button type="submit" variant="outlined" className={classes.btn}>
            {state.location.state !== undefined ? "Update" : "Add"}
          </Button>
        </form>
      </div>
    </>
  );
}
