import React from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ExitToApp from "@material-ui/icons/ExitToApp";
import { NavLink } from "./elements";
import Search from "./search";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  exitButton: {
    marginLeft: theme.spacing(2),
  },
  left: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  title: {
    marginRight: theme.spacing(8),
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.primary.light,
    "&:hover": {
      //backgroundColor: alpha(theme.palette.primary.light, 0.25),
      backgroundColor: theme.palette.info.light,
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "24ch",
      "&:focus": {
        width: "32ch",
      },
    },
  },
}));

const SearchAppBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <div className={classes.left}>
            <Typography className={classes.title} variant="h2" noWrap>
              BookFlix
            </Typography>
            <Typography variant="h6" noWrap>
              <NavLink to="/home">Home</NavLink>
            </Typography>
            <Typography variant="h6" noWrap>
              <NavLink to="/list">My List</NavLink>
            </Typography>
          </div>
          <div className={classes.search}>
            <Search />
          </div>
          <IconButton
            edge="start"
            className={classes.exitButton}
            color="inherit"
            aria-label="open drawer"
          >
            <NavLink to="/login">
              <ExitToApp />
            </NavLink>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default SearchAppBar;
