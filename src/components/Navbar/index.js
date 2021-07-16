import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  //InputBase,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
//import SearchIcon from "@material-ui/icons/Search";
import ExitToApp from "@material-ui/icons/ExitToApp";
import { NavLink } from "./elements";

import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CircularProgress from "@material-ui/core/CircularProgress";

import { SEARCH } from "../../graphql/Queries";
import { useLazyQuery } from "@apollo/client";

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
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const [searchText, setSearchText] = useState();
  //const loading = open && options.length === 0;
  const classes = useStyles();

  const [search, { data, loading }] = useLazyQuery(SEARCH, {
    variables: {
      filter: searchText,
    },
    onCompleted: () => {
      console.log("on completed of search", data.search);
      const res = JSON.parse(JSON.stringify(data.search));
      setOptions(res.books);
    },
  });

  useEffect(() => {
    search();
  }, [searchText, search]);

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
          {/* <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div> */}
          <div className={classes.search}>
            {/* <div className={classes.searchIcon}>
              <SearchIcon />
            </div> */}
            <Autocomplete
              id="asynchronous-demo"
              style={{ width: 300 }}
              open={open}
              onOpen={() => {
                setOpen(true);
              }}
              onClose={() => {
                setOpen(false);
              }}
              getOptionSelected={(option, value) =>
                option.title === value.title
              }
              getOptionLabel={(option) => option.title}
              options={options}
              loading={loading}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="outlined"
                  value={searchText}
                  onChange={(event) => setSearchText(event.target.value)}
                  InputProps={{
                    ...params.InputProps,
                    endAdornment: (
                      <React.Fragment>
                        {loading ? (
                          <CircularProgress color="inherit" size={20} />
                        ) : null}
                        {params.InputProps.endAdornment}
                      </React.Fragment>
                    ),
                  }}
                />
              )}
            />
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
