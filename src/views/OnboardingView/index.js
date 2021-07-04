import { Container, Grid, Typography, Box, Button } from "@material-ui/core";
import BooksOnboard from "./books";
import GenresOnboard from "./genres";
import AuthorsOnboard from "./authors";
import GlobalLayout from "../../layouts/GlobalLayout";
import { useState } from "react";
import { useHistory } from "react-router";
import { makeStyles } from "@material-ui/core/styles";
import { useMutation } from "@apollo/client";
import { SET_FAV_Book } from "../../graphql/Mutations";

const useStyles = makeStyles((theme) => ({
  button: {
    borderRadius: "8px",
    marginTop: "16px",
    width: "240px",
    height: "90px",
    fontSize: "24px",
    border: "4px solid",
    color: theme.palette.primary.light,
    "&:hover": {
      opacity: "0.6",
    },
  },
  box: {
    margin: "64px",
  },
}));

const OnboardingView = () => {
  const history = useHistory();
  const classes = useStyles();
  const [step, setStep] = useState(0);
  const [genreSelected, setGenreSelected] = useState([]);
  const [authorSelected, setAuthorSelected] = useState([]);
  const [bookSelected, setBookSelected] = useState([]);

  const [setFavBooks] = useMutation(SET_FAV_Book, {
    variables: {
      bookIds: bookSelected.map((book) => book.id),
      operation: "add",
    },
    onCompleted: () => {
      console.log("Successfully added fav book");
    },
    onError: () => {
      console.log("Couldn't add fav book");
    },
  });

  return (
    <GlobalLayout>
      <Container>
        <Box className={classes.box}>
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
                  <Typography variant="h2">
                    Pick at least 3 of your favorite genres
                  </Typography>
                </Grid>
                <Grid item>
                  <GenresOnboard setGenreSelected={setGenreSelected} />
                </Grid>
                <Grid>
                  <Button
                    className={classes.button}
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
                  <Typography variant="h2">
                    Pick at least 3 of your favorite authors
                  </Typography>
                </Grid>
                <Grid item>
                  <AuthorsOnboard setAuthorSelected={setAuthorSelected} />
                </Grid>
                <Grid>
                  <Button
                    className={classes.button}
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
                  <Typography variant="h2">
                    Pick at least 3 books you like
                  </Typography>
                </Grid>
                <Grid item>
                  <BooksOnboard
                    setBookSelected={setBookSelected}
                    genreSelected={genreSelected}
                    authorSelected={authorSelected}
                  />
                </Grid>
                <Grid>
                  <Button
                    className={classes.button}
                    onClick={() => {
                      console.log(bookSelected);
                      setFavBooks();
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
