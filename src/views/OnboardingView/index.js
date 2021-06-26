//import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Typography, Box, Button } from "@material-ui/core";
import BooksOnboard from "./books";
import GenresOnboard from "./genres";
import AuthorsOnboard from "./authors";
import GlobalLayout from "../../layouts/GlobalLayout";
import { useState } from "react";
import { useHistory } from "react-router";

// const useStyles = makeStyles((theme) => ({
//   box: {
//     margin: "32px",
//   },
// }));

const OnboardingView = () => {
  //const classes = useStyles();
  const history = useHistory();
  const [step, setStep] = useState(0);
  return (
    <GlobalLayout>
      <Container>
        <Box style={{ margin: "32px" }}>
          <Grid
            container
            spacing={6}
            direction="column"
            justify="center"
            alignItems="center"
          >
            {step === 0 ? (
              <>
                <Grid item>
                  <Typography variant="h2" style={{ marginTop: "16px" }}>
                    Select at least 3 Genres you like !
                  </Typography>
                </Grid>
                <Grid item>
                  <GenresOnboard />
                </Grid>
                <Grid>
                  <Button
                    style={{
                      marginTop: "16px",
                      width: "180px",
                      height: "70px",
                    }}
                    variant="contained"
                    color="primary"
                    onClick={() => setStep(1)} //check api call validity
                  >
                    Continue
                  </Button>
                </Grid>
              </>
            ) : (
              <></>
            )}

            {step === 1 ? (
              <>
                <Grid item>
                  <Typography variant="h2" style={{ marginTop: "16px" }}>
                    Select at least 3 Authors you like !
                  </Typography>
                </Grid>
                <Grid item>
                  <AuthorsOnboard />
                </Grid>
                <Grid>
                  <Button
                    style={{
                      marginTop: "16px",
                      width: "180px",
                      height: "70px",
                    }}
                    variant="contained"
                    color="primary"
                    onClick={() => setStep(2)} //check api call validity
                  >
                    Continue
                  </Button>
                </Grid>
              </>
            ) : (
              <></>
            )}

            {step === 2 ? (
              <>
                <Grid item>
                  <Typography variant="h2" style={{ marginTop: "16px" }}>
                    Select at least 3 Books you like !
                  </Typography>
                </Grid>
                <Grid item>
                  <BooksOnboard />
                </Grid>
                <Grid>
                  <Button
                    style={{
                      marginTop: "16px",
                      width: "180px",
                      height: "70px",
                    }}
                    variant="contained"
                    color="primary"
                    onClick={() => history.push("/home")} //check api call validity
                  >
                    Continue
                  </Button>
                </Grid>
              </>
            ) : (
              <></>
            )}
          </Grid>
        </Box>
      </Container>
    </GlobalLayout>
  );
};

export default OnboardingView;
