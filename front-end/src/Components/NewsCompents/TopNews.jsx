import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import { useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import LinearProgress from "@material-ui/core/LinearProgress";
import FaceIcon from "@material-ui/icons/Face";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import ShareIcon from "@material-ui/icons/Share";
import CategoryComponent from "../NewsCompents/CategoryComponent";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    marginTop: "5px",
    marginLeft: "1%",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 800,
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    // transform: 'translateZ(0)',
  },
  titleBar: {
    background:
      "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
      "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
  icon: {
    color: "white",
  },
  Listroot: {
    flexGrow: 1,
    overflow: "hidden",
    backgroundColor: "#bbdefb",
  },
  Listpaper: {
    maxWidth: 400,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  },
  media: {
    borderRadius: "7px",
    height: 0,
    paddingTop: "56.25%",
    marginTop: "30",
  },
  MiddleAuthor: {
    color: "#f44336",
    borderRadius: "55px",
    backgroundColor: "#e3f2fd",
    textAlign: "left",
    padding: "5px",
    fontSize: "10px",
    fontWeight: "bolder",
  },
  MiddlepublishedAt: {
    textAlign: "left",
    fontSize: "15px",
  },
  Rightmedia: {
    height: 180,
    borderRadius: "7px",
  },
}));

export default function TopNews() {
  const classes = useStyles();

  var NewsData = useSelector((state) => state);
  useEffect(() => {
    console.log("useEffect TopNews", NewsData.NewsData.NewsData.articles);
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
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={2}>
            <h4 style={{ color: "grey" }}>Category & Profile</h4>
            <Paper className={classes.paper}>
              <CategoryComponent />
            </Paper>
          </Grid>
          {/* middle start */}
          <Grid item xs={12} md={6}>
            <h4 style={{ color: "red" }}>Breaking News</h4>
            <Paper className={classes.paper}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={articles && articles[12].urlToImage}
                    title={articles && articles[12].source.name}
                  />
                  <CardContent>
                    {/* below image middle */}
                    <div className={classes.root}>
                      <Grid container spacing={3}>
                        <Grid item xs={3}>
                          <Typography
                            className={classes.MiddleAuthor}
                            gutterBottom
                            variant="h6"
                            component="h6"
                          >
                            {articles[5].source.name}
                          </Typography>
                        </Grid>
                        <Grid align="right" item xs={9}>
                          <span style={{ marginRight: "18px" }}>
                            <FaceIcon />{" "}
                            <span style={{ verticalAlign: "middle" }}>
                              25.3M
                            </span>{" "}
                          </span>
                          <span style={{ marginRight: "18px" }}>
                            <ChatBubbleOutlineIcon />
                            25
                          </span>
                          <span>
                            <ShareIcon />
                            25.3M
                          </span>
                        </Grid>
                      </Grid>
                    </div>
                    {/* below image middle */}
                    <Typography
                      className={classes.MiddlepublishedAt}
                      gutterBottom
                      variant="h6"
                      component="h6"
                    >
                      By: {articles[12].author}
                    </Typography>
                    <Typography
                      className={classes.MiddlepublishedAt}
                      gutterBottom
                      variant="h6"
                      component="h6"
                    >
                      Published At: {articles[12].publishedAt}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="h2">
                      {articles[12].title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {articles[12].content}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Share
                  </Button>
                  <Button size="small" color="primary">
                    Learn More
                  </Button>
                </CardActions>
              </Card>
              {/* 2nd card of middle portion starts here */}
              <Card>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={articles[5].urlToImage}
                    title={articles[5].source.name}
                  />
                  <CardContent>
                    <div className={classes.root}>
                      <Grid container spacing={3}>
                        <Grid item xs={3}>
                          <Typography
                            className={classes.MiddleAuthor}
                            gutterBottom
                            variant="h6"
                            component="h6"
                          >
                            {articles[5].source.name}
                          </Typography>
                        </Grid>
                        <Grid align="right" item xs={9}>
                          <span style={{ marginRight: "18px" }}>
                            <FaceIcon />{" "}
                            <span style={{ verticalAlign: "middle" }}>
                              25.3M
                            </span>{" "}
                          </span>
                          <span style={{ marginRight: "18px" }}>
                            <ChatBubbleOutlineIcon />
                            25
                          </span>
                          <span>
                            <ShareIcon />
                            25.3M
                          </span>
                        </Grid>
                      </Grid>
                    </div>
                    <Typography
                      className={classes.MiddlepublishedAt}
                      gutterBottom
                      variant="h6"
                      component="h6"
                    >
                      By: {articles[5].author}
                    </Typography>
                    <Typography
                      className={classes.MiddlepublishedAt}
                      gutterBottom
                      variant="h6"
                      component="h6"
                    >
                      Published At: {articles[5].publishedAt}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="h2">
                      {articles[5].title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {articles[5].content}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Share
                  </Button>
                  <Button size="small" color="primary">
                    Learn More
                  </Button>
                </CardActions>
              </Card>

              {/* 2nd portion ends here */}

              {/* 3rd card of middle portion starts here */}
              <Card>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={articles[9].urlToImage}
                    title={articles[9].source.name}
                  />
                  <CardContent>
                    <div className={classes.root}>
                      <Grid container spacing={3}>
                        <Grid item xs={3}>
                          <Typography
                            className={classes.MiddleAuthor}
                            gutterBottom
                            variant="h6"
                            component="h6"
                          >
                            {articles[9].source.name}
                          </Typography>
                        </Grid>
                        <Grid align="right" item xs={9}>
                          <span style={{ marginRight: "18px" }}>
                            <FaceIcon />{" "}
                            <span style={{ verticalAlign: "middle" }}>
                              25.3M
                            </span>{" "}
                          </span>
                          <span style={{ marginRight: "18px" }}>
                            <ChatBubbleOutlineIcon />
                            25
                          </span>
                          <span>
                            <ShareIcon />
                            25.3M
                          </span>
                        </Grid>
                      </Grid>
                    </div>
                    <Typography
                      className={classes.MiddlepublishedAt}
                      gutterBottom
                      variant="h6"
                      component="h6"
                    >
                      By: {articles[9].author}
                    </Typography>
                    <Typography
                      className={classes.MiddlepublishedAt}
                      gutterBottom
                      variant="h6"
                      component="h6"
                    >
                      Published At: {articles[9].publishedAt}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="h2">
                      {articles[9].title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {articles[9].content}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Share
                  </Button>
                  <Button size="small" color="primary">
                    Learn More
                  </Button>
                </CardActions>
              </Card>

              {/* 3rd portion ends here */}
            </Paper>
          </Grid>

          {/* middle end */}

          <Grid item xs={12} md={4}>
            <h4 style={{ color: "grey" }}>Related News</h4>
            {articles &&
              articles.map((item) => {
                return (
                  <div>
                    <div>
                      <CardActionArea>
                        <CardMedia
                          className={classes.Rightmedia}
                          image={item.urlToImage}
                          title={item.source.name}
                        />
                        <CardContent>
                          <Typography
                            className={classes.MiddleAuthor}
                            gutterBottom
                            variant="h6"
                            component="h6"
                          >
                            {item.source.name}
                          </Typography>
                          <Typography gutterBottom>{item.title}</Typography>
                          {/* <Typography variant="body2" color="textSecondary" component="p">
          {item.description}
          </Typography> */}
                        </CardContent>
                      </CardActionArea>
                      {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions> */}
                    </div>
                  </div>
                );
              })}
          </Grid>
        </Grid>
      </div>
    );
  }
}
