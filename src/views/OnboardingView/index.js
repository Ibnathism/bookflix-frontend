import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Typography, Box } from "@material-ui/core";
import onboardings from "../../data/onboarding.json";
import BookSelectCard from "../../components/BookSelectCard";
import GlobalLayout from "../../layouts/GlobalLayout";
const useStyles = makeStyles((theme) => ({
  box: {
    margin: "32px",
  },
}));

const OnboardingView = () => {
  const classes = useStyles();
  return (
    <GlobalLayout>
      <Container>
        <Box className={classes.box}>
          <Grid
            container
            spacing={5}
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Grid item>
              <Typography variant="h2">
                Select at least 5 books you like !
              </Typography>
            </Grid>
            <Grid item>
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
                      <BookSelectCard imageUrl={item.imageUrl} />
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </GlobalLayout>
  );
};

export default OnboardingView;
