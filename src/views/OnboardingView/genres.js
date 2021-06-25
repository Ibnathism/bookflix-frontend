import { Grid, Typography, Card } from "@material-ui/core";
import genres from "../../data/genres.json";
import { makeStyles } from "@material-ui/core/styles";
import { useState, useEffect } from "react";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "300px",
    height: "120px",
    background: theme.palette.secondary.main,
    borderRadius: "64px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: "16px",
    // "&:hover": {
    //   background: "#f0f0f0",
    // },
    cursor: "pointer",
    "&:hover, &:focus": {
      backgroundColor: "#D8F3DC",
    },
    "&:active": {
      backgroundColor: "#505050",
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
    console.log(genreData);
  }, [genreData]);

  const cardOnClickHandler = (id) => {
    console.log("clicked card", id);
    document.getElementById("book-card");
  };
  return (
    <>
      <Typography variant="h2" style={{ marginBottom: "16px" }}>
        Genres
      </Typography>
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
              <Card
                className={classes.root}
                onMouseEnter={cardOnClickHandler(item.id)}
                id="book-card"
              >
                <Typography
                  style={{
                    color: "#030c08",
                    fontSize: "18px",
                  }}
                >
                  {item.name}
                </Typography>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default GenresOnboard;
