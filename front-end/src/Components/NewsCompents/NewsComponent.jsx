import Card from "@material-ui/core/Card";
import React from "react";
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
const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
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
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
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
          <ListItem button>
            <ListItemIcon>
              <LocalLibraryIcon />
            </ListItemIcon>
            <ListItemText primary="general" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <FavoriteIcon />
            </ListItemIcon>
            <ListItemText primary="health" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <TrendingUpIcon />
            </ListItemIcon>
            <ListItemText primary="science" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <SportsIcon />
            </ListItemIcon>
            <ListItemText primary="sports" />
          </ListItem>
          <ListItem button>
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
