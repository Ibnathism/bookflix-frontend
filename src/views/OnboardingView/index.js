import { Container, Grid, Typography, Box, Button } from "@material-ui/core";
import BooksOnboard from "./books";
import GenresOnboard from "./genres";
import AuthorsOnboard from "./authors";
import GlobalLayout from "../../layouts/GlobalLayout";
import { useState } from "react";
import { useHistory } from "react-router";

const OnboardingView = () => {
  const history = useHistory();
  const [step, setStep] = useState(0);
  const [genreSelected, setGenreSelected] = useState([]);
  const [authorSelected, setAuthorSelected] = useState([]);
  const [bookSelected, setBookSelected] = useState([]);
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
                  <GenresOnboard setGenreSelected={setGenreSelected} />
                </Grid>
                <Grid>
                  <Button
                    style={{
                      marginTop: "16px",
                      width: "120px",
                      height: "50px",
                    }}
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      console.log(genreSelected);
                      setStep(1);
                    }} //check api call validity
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
                  <AuthorsOnboard setAuthorSelected={setAuthorSelected} />
                </Grid>
                <Grid>
                  <Button
                    style={{
                      marginTop: "16px",
                      width: "120px",
                      height: "50px",
                    }}
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      console.log(authorSelected);
                      setStep(2);
                    }} //check validity whether at least 3 have been selected
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
                  <BooksOnboard setBookSelected={setBookSelected} />
                </Grid>
                <Grid>
                  <Button
                    style={{
                      marginTop: "16px",
                      width: "120px",
                      height: "50px",
                    }}
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      console.log(bookSelected);
                      history.push("/home");
                    }} //check api call validity
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
