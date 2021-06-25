import { Grid, Typography, Box } from "@material-ui/core";
import genres from "../../data/genres.json";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "160px",
    height: "223px",
    background: theme.palette.primary.main,
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    width: "100%",
    height: "100%",
    borderRadius: "8px",
  },
}));

const GenresOnboard = () => {
  const classes = useStyles();
  return (
    <>
      <Typography variant="h2" style={{ marginBottom: "16px" }}>
        Genres
      </Typography>
      <Grid container spacing={3}>
        {genres.map((item, id) => {
          return (
            <Grid
              item
              md={2}
              xs={6}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box className={classes.root}>
                <Typography variant="h3">{item.name}</Typography>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default GenresOnboard;
