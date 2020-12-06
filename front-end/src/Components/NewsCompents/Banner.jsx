import React from 'react'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    backGround: {
      padding: theme.spacing(1),
      textAlign:"middle",
      backgroundColor:"#eceff1",
      color:"#ff5722",
      fontFamily:"cursive"

    },
  }));

function Banner() {
    const classes = useStyles();
  return (
    <div className={classes.backGround} align="center">
        All News At Your Fingertip More >
    </div>
  );
}

export default Banner;
