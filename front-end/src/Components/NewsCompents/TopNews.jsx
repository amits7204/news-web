import React,{useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { useSelector } from 'react-redux'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function TopNews() {
  const classes = useStyles();
  var NewsData = useSelector(state=> state)
  
  useEffect(() => {
    console.log("useEffect TopNews",NewsData.NewsData.NewsData.articles)
  });
  
  
  const {articles} = NewsData.NewsData.NewsData
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {/* {
            articles && 
            articles.map((item)=> {
                return(
                   <div> */}
                        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
                   {/* </div>
                )
            })
        } */}
      </Grid>
    </div>
  );
}
