import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPatientData } from "../Redux/ActionCreator";

import { withStyles, makeStyles } from "@material-ui/core/styles";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import EditIcon from "@material-ui/icons/Edit";
import Pagination from "@material-ui/lab/Pagination";

import { useHistory } from "react-router-dom";

/**
 *  Styles for table
 */

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function Home() {
  const dispatch = useDispatch();
  const patientList = useSelector((state) => state.data.patientData);
  console.log("Patient: ", patientList);
  const [active, setActive] = useState(1);
  const [search, setSearch] = useState();
  const [changeAge, setAgeChange] = useState("All");
  const totalPages = Math.ceil(patientList.length / 10);
  const history = useHistory();
  let offSet = (active - 1) * 10;
  const [selectGender, setGender] = useState("All");
  useEffect(() => {
    dispatch(getPatientData());
  }, []);
  const classes = useStyles();
  const handlePagination = (e, value) => {
    setActive(value);
  };

  const searchOnClick = () => {
    console.log("onClick");
    dispatch(getPatientData(search));
  };

  const handleOnEdit = (id, fname, lname, email, age, gender) => {
    history.push({
      pathname: `/modifie/${id}`,
      state: {
        id: id,
        fname: fname,
        lname: lname,
        email: email,
        age: age,
        gender: gender,
      },
    });
  };
  const handleOnGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleOnAgeChange = (e) => {
    setAgeChange(e.target.value);
  };
  return (
    <div>
      <input
        placeholder="Enter Search Value"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={searchOnClick}>Search</button>
      Filter By Gender :
      <select onChange={handleOnGenderChange}>
        <option name="All" value="All">
          All
        </option>
        <option name="men" value="male">
          male
        </option>
        <option name="jewelery" value="female">
          female
        </option>
      </select>
      Sort By age :
      <select onChange={handleOnAgeChange}>
        <option value="All">All</option>
        <option value="asc">ASC</option>
        <option value="desc">DESC</option>
      </select>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Id</StyledTableCell>
              <StyledTableCell align="right">First Name</StyledTableCell>
              <StyledTableCell align="right">Last Name</StyledTableCell>
              <StyledTableCell align="right">Email</StyledTableCell>
              <StyledTableCell align="right">Age</StyledTableCell>
              <StyledTableCell align="right">Gender</StyledTableCell>
              <StyledTableCell align="right">Edit</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {patientList
              .filter((item) => {
                if (selectGender == "All") {
                  return item.gender;
                } else if (selectGender == undefined) {
                  return item.gender;
                } else {
                  return item.gender == selectGender;
                }
              })
              .sort((a, b) => {
                if (changeAge == "asc") {
                  return a.age - b.age;
                } else if (changeAge == "desc") {
                  return b.age - a.age;
                }
              })
              .filter((item, index) => index >= offSet && index < offSet + 10)

              .map((item) => (
                <StyledTableRow key={item.id}>
                  {/* <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell> */}
                  <StyledTableCell align="right">{item.id}</StyledTableCell>
                  <StyledTableCell align="right">
                    {item.first_name}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {item.last_name}
                  </StyledTableCell>
                  <StyledTableCell align="right">{item.email}</StyledTableCell>
                  <StyledTableCell align="right">{item.age}</StyledTableCell>
                  <StyledTableCell align="right">{item.gender}</StyledTableCell>
                  <StyledTableCell align="right">
                    <button
                      onClick={() =>
                        handleOnEdit(
                          item.id,
                          item.first_name,
                          item.last_name,
                          item.email,
                          item.age,
                          item.gender
                        )
                      }
                    >
                      Edit
                    </button>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination
        style={{ marginLeft: "40%", marginTop: "10px" }}
        page={active}
        count={totalPages}
        onChange={handlePagination}
        color="secondary"
      />
    </div>
  );
}
