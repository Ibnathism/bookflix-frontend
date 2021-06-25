import { Grid, Typography, Box } from "@material-ui/core";
import authors from "../../data/authors.json";
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

const AuthorsOnboard = () => {
  const classes = useStyles();
  return (
    <>
      <Typography variant="h2" style={{ marginBottom: "16px" }}>
        Authors
      </Typography>
      <Grid container spacing={3}>
        {authors.map((item, id) => {
          return (
            <Grid
              item
              key={id}
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

export default AuthorsOnboard;
