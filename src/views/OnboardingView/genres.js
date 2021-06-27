import { Grid, Typography, Box } from "@material-ui/core";
import genres from "../../data/genres.json";
import { makeStyles } from "@material-ui/core/styles";
import { useState, useEffect } from "react";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "300px",
    height: "100px",
    borderRadius: "64px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: "16px",
    cursor: "pointer",
    "&:hover, &:focus": {
      backgroundColor: "#D8F3DC",
    },
  },
}));

const GenresOnboard = () => {
  const classes = useStyles();
  const [genreData, setGenreData] = useState([]);

  useEffect(() => {
    genres.forEach((item) => {
      item.selected = false;
    });
    setGenreData(genres);
    //console.log(genreData);
  }, []);

  const onClickHandler = (id) => {
    //console.log("clicked card", id);
    const newItems = [...genreData];
    var item = genreData.findIndex((obj) => obj.id === id);
    //console.log(item);
    newItems[item].selected = !newItems[item].selected;
    setGenreData(newItems);
    //console.log(genreData);
  };
  return (
    <>
      <Grid container spacing={3}>
        {genreData.map((item, id) => {
          return (
            <Grid
              key={id}
              item
              md={3}
              xs={6}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                style={{
                  backgroundColor: item.selected ? "#505050" : "#D8F3DC",
                }}
                className={classes.root}
                id="book-card"
                onClick={() => onClickHandler(item.id)}
                role="button"
              >
                <Typography
                  style={{
                    color: "#030c08",
                    fontSize: "20px",
                  }}
                >
                  {item.name}
                </Typography>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default GenresOnboard;
