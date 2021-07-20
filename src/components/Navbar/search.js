import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CircularProgress from "@material-ui/core/CircularProgress";
import React, { useState, useEffect } from "react";
import { Typography, Grid } from "@material-ui/core";
import { useHistory } from "react-router";
import { SEARCH } from "../../graphql/Queries";
import { useLazyQuery } from "@apollo/client";

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
      //console.log("on completed of search", data.search);
      const res = JSON.parse(JSON.stringify(data.search));
      setOptions(res.books);
    },
  });

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
      getOptionSelected={(option, value) => option.title === value.title}
      onChange={(event, newValue) => {
        //console.log("in the on change", newValue);
        newValue && newValue.id
          ? history.push(`/home/${newValue.id}`)
          : console.log("Book not found");
      }}
      getOptionLabel={(option) => option.title}
      options={options}
      loading={loading}
      renderOption={(option) => (
        <React.Fragment>
          <img
            alt="img"
            width="50px"
            height="70px"
            src={`https://bookflix-dev.s3.ap-southeast-1.amazonaws.com/${option.coverImageUrl}`}
          />
          <Grid container style={{ padding: "8px" }}>
            <Grid>
              <Typography variant="body1">{option.title}</Typography>
            </Grid>
            <Grid>
              <Typography variant="body1">
                {option.authors.length !== 0 ? option.authors[0].name : ""}
              </Typography>
            </Grid>
          </Grid>
        </React.Fragment>
      )}
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
  );
};

export default Search;
