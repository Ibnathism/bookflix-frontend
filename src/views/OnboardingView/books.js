import { Grid, Typography, Box } from "@material-ui/core";
import onboardings from "../../data/onboarding.json";
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

const BooksOnboard = () => {
  const classes = useStyles();
  return (
    <>
      <Typography variant="h2" style={{ marginBottom: "16px" }}>
        Books
      </Typography>
      <Grid container spacing={3}>
        {onboardings.map((item, id) => {
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
                <img
                  className={classes.imageContainer}
                  src={item.imageUrl}
                  alt="book"
                />
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default BooksOnboard;
