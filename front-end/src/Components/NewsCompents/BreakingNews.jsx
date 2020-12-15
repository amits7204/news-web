import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Button } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import { useSelector } from "react-redux";
import LinearProgress from "@material-ui/core/LinearProgress";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
  },
  font: {
    position: "absolute",
    top: "5%",
    right: "35%",
    width: "100%",
    textAlign: "center",
    color: "#ff1744",
    backgroundColor: "white",
    fontFamily: "Comic Sans MS",
  },
  title: {
    position: "absolute",
    top: "25%",
    left: "2%",
    width: "100%",
    textAlign: "left",
    color: "white",
    backgroundColor: "none",
    fontFamily: "Comic Sans MS",
  },
  KnowMore: {
    position: "absolute",
    top: "65%",
    right: "45%",
    width: "100%",
  },
  spinner: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function BreakingNews() {
  const classes = useStyles();
  var NewsData = useSelector((state) => state);

  useEffect(() => {
    console.log("useEffect BreakingNews", NewsData.NewsData.NewsData.articles);
  });

  const { articles } = NewsData.NewsData.NewsData;
  if (articles == undefined) {
    return (
      <div className={classes.spinner}>
        <LinearProgress color="secondary" />
      </div>
    );
  } else {
    return (
      <Card className={classes.root}>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="400"
          image={articles[8].urlToImage}
          title="Contemplative Reptile"
        />
        <Typography
          gutterBottom
          variant="h3"
          component="h3"
          className={classes.font}
        >
          Big Breaking News
        </Typography>
        <Typography
          gutterBottom
          variant="h3"
          component="h3"
          className={classes.title}
        >
          {articles[8].title}
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          className={classes.KnowMore}
        >
          Know More
        </Button>
      </Card>
    );
  }
}
