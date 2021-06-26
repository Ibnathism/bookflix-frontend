import { Grid, Typography, Card, Chip } from "@material-ui/core";
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
  chipSelected: {
    width: "300px",
    height: "120px",
    background: "#505050",
    borderRadius: "64px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: "16px",
  },
  chip: {
    width: "300px",
    height: "120px",
    backgroundColor: theme.palette.secondary.main,
    borderRadius: "64px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: "16px",
    fontSize: "18px",
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

  const cardOnClickHandler = (id) => {
    // console.log("clicked card", id);
    // var genreList = genreData;
    // var objIndex = genreList.findIndex((obj) => obj.id == id);
    // //Log object to Console.
    // console.log("Before update: ", genreList[objIndex]);
    // //Update object's name property.
    // genreList[objIndex].selected = !genreList[objIndex].selected;
    // //Log object to console again.
    // console.log("After update: ", genreList[objIndex]);
    // setGenreData(genreList);
    // const newItems = [...genreData];
    // var objIndex = genreData.findIndex((obj) => obj.id == id);
    // console.log(objIndex);
    // //newItems[objIndex].selected = true;
    // setGenreData(newItems);
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
              {/* <Chip
                label={item.name}
                // icon={
                //   <CheckIcon
                //     key={index}
                //     id={`check_${item.name}`}
                //     color="primary"
                //     visibility={item.selected ? "visible" : "hidden"}
                //   />
                // }
                //key={id}
                onClick={() => console.log(item)}
                id={`chip_${item.name}`}
                //ref={setChipRef}
                className={item.selected ? classes.chipSelected : classes.chip}
              /> */}
              <Card
                className={classes.root}
                id="book-card"
                onClick={cardOnClickHandler(id)}
                role="button"
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
