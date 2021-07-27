import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CircularProgress from "@material-ui/core/CircularProgress";
import React, { useState, useEffect } from "react";
import { Typography, Grid, Paper } from "@material-ui/core";
import { useHistory } from "react-router";
import { SEARCH } from "../../graphql/Queries";
import { useLazyQuery } from "@apollo/client";
import constants from "../../data/constants.json";

const Search = () => {
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const [searchText, setSearchText] = useState();
  const [search, { data, loading }] = useLazyQuery(SEARCH, {
    variables: {
      filter: searchText,
    },
    onCompleted: () => {
      //const res = JSON.parse(JSON.stringify(data.search));
      setOptions(data.search.books);
      //console.log("on completed of search", data.search.books);
    },
  });

  const getCustomLabel = (option) => {
    let label = option.title;
    option.genres.forEach((genre) => {
      label += " " + genre.name;
    });
    option.authors.forEach((author) => {
      label += " " + author.name;
    });
    return label;
  };

  useEffect(() => {
    if (searchText?.length >= 3) {
      search();
    }
  }, [searchText, search]);

  return (
    <Autocomplete
      style={{ width: 300 }}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      noOptionsText="Enter Name of the book....."
      getOptionSelected={(option, value) =>
        getCustomLabel(option) === getCustomLabel(value)
      }
      onChange={(event, newValue) => {
        //console.log("in the on change", newValue);
        newValue && newValue.id
          ? history.push(`/home/${newValue.id}`)
          : console.log("Book not found");
      }}
      getOptionLabel={(option) => getCustomLabel(option)}
      options={options}
      loading={loading}
      PaperComponent={({ children }) => (
        <Paper style={{ background: "#030c08", border: "1px solid #D8F3DC" }}>
          {children}
        </Paper>
      )}
      renderOption={(option) => {
        //console.log(option);
        return (
          <Grid container spacing={3}>
            <Grid item md={3} xs={3}>
              <img
                alt="img"
                width="54px"
                height="100%"
                src={`https://bookflix-dev.s3.ap-southeast-1.amazonaws.com/${option.coverImageUrl}`}
              />
            </Grid>
            <Grid item md={9} xs={9}>
              <Grid container spacing={1}>
                <Grid item md={12} xs={12}>
                  <Typography variant="h4" style={{ color: "#D8F3DC" }}>
                    {option.title.length >= constants.bookNameMaxLength
                      ? `${option.title}`.substr(
                          0,
                          constants.bookNameMaxLength
                        ) + "..."
                      : `${option.title}`}
                  </Typography>
                </Grid>
                <Grid item md={12} xs={12}>
                  <Typography variant="body1" style={{ color: "#D8F3DC" }}>
                    {option.authors.length !== 0 ? option.authors[0].name : ""}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        );
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="filled"
          label="Search..."
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
  );
};

export default Search;
