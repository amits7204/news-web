import Card from "@material-ui/core/Card";
import React, { useEffect } from "react";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import TheatersIcon from "@material-ui/icons/Theaters";
import { makeStyles } from "@material-ui/core/styles";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
import FavoriteIcon from "@material-ui/icons/Favorite";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import SportsIcon from "@material-ui/icons/Sports";
import TimelineIcon from "@material-ui/icons/Timeline";
import { getNewsData } from "../../Redux/NewsRedux/ActionCreator";
import { useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 185,
    borderRadius: 7,
  },
  listRoot: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  listSubHeader: {
    fontWeight: "bold",
    fontSize: 14,
  },
}));
export default function NewsComponent() {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    switch (selectedIndex) {
      case 0:
        return dispatch(getNewsData("entertainment"));
      case 1:
        return dispatch(getNewsData("general"));
      case 2:
        return dispatch(getNewsData("health"));
      case 3:
        return dispatch(getNewsData("science"));
      case 4:
        return dispatch(getNewsData("sports"));
      case 5:
        return dispatch(getNewsData("technology"));
      default:
        return dispatch(getNewsData("general"));
    }
  }, [selectedIndex]);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
    console.log("Index: ", event.target);
  };
  return (
    <>
      <Card className={classes.root}>
        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader
              className={classes.listSubHeader}
              component="div"
              id="nested-list-subheader"
            >
              News Category
            </ListSubheader>
          }
          className={classes.listRoot}
        >
          <ListItem
            button
            selected={selectedIndex === 0}
            onClick={(event) => handleListItemClick(event, 0)}
          >
            <ListItemIcon>
              <TheatersIcon />
            </ListItemIcon>
            <ListItemText primary="entertainment" />
          </ListItem>
          <ListItem
            button
            selected={selectedIndex === 1}
            onClick={(event) => handleListItemClick(event, 1)}
          >
            <ListItemIcon>
              <LocalLibraryIcon />
            </ListItemIcon>
            <ListItemText primary="general" />
          </ListItem>
          <ListItem
            button
            selected={selectedIndex === 2}
            onClick={(event) => handleListItemClick(event, 2)}
          >
            <ListItemIcon>
              <FavoriteIcon />
            </ListItemIcon>
            <ListItemText primary="health" />
          </ListItem>
          <ListItem
            button
            selected={selectedIndex === 3}
            onClick={(event) => handleListItemClick(event, 3)}
          >
            <ListItemIcon>
              <TrendingUpIcon />
            </ListItemIcon>
            <ListItemText primary="science" />
          </ListItem>
          <ListItem
            button
            selected={selectedIndex === 4}
            onClick={(event) => handleListItemClick(event, 4)}
          >
            <ListItemIcon>
              <SportsIcon />
            </ListItemIcon>
            <ListItemText primary="sports" />
          </ListItem>
          <ListItem
            button
            selected={selectedIndex === 5}
            onClick={(event) => handleListItemClick(event, 5)}
          >
            <ListItemIcon>
              <TimelineIcon />
            </ListItemIcon>
            <ListItemText primary="technology" />
          </ListItem>
        </List>
      </Card>
    </>
  );
}
