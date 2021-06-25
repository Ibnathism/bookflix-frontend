import { Grid, Typography, Box, Card } from "@material-ui/core";
import genres from "../../data/genres.json";
import { makeStyles } from "@material-ui/core/styles";

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
    padding: "8px",
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
              md={3}
              xs={6}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Card className={classes.root}>
                <Typography style={{ color: "#030c08", fontSize: "16px" }}>
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
