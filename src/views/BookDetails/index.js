import CommonLayout from "../../layouts/CommonLayout";
import { Container, Grid, Typography, Chip, Button } from "@material-ui/core";
import Feed from "../../components/Feed";
import { useState, useEffect } from "react";
import { GET_FEED, GET_BOOK_DETAILS } from "../../graphql/Queries";
import { useLazyQuery } from "@apollo/client";
import { useParams, useHistory } from "react-router";
import LottieAnimation from "../../helpers/lottie";
import LoadAnimation from "../../animations/feed-loading.json";

const DetailsView = () => {
  const [feed, setFeed] = useState([]);
  const [details, setDetails] = useState({
    title: "",
    coverImageUrl: "",
    description: "",
    genres: [],
    authors: [],
  });
  const { id } = useParams();
  const history = useHistory();
  //console.log(id);

  const [getFeed, { data, error }] = useLazyQuery(GET_FEED, {
    variables: {
      bookCountEachCategory: 10,
      categoryCount: 10,
    },
    onCompleted: () => {
      console.log("on completed of details", data.feed);
      const res = JSON.parse(JSON.stringify(data.feed));
      setFeed(res);
    },
    onError: () => {
      setFeed([]);
      console.log(error);
    },
  });

  useEffect(() => {
    getFeed();
  }, [getFeed]);

  const [getBookDetails, { data: bookDetails, loading, error: bookError }] =
    useLazyQuery(GET_BOOK_DETAILS, {
      variables: {
        id: id,
      },
      onCompleted: () => {
        console.log(bookDetails);
        const res = JSON.parse(JSON.stringify(bookDetails.book));
        setDetails(res);
      },
      onError: () => {
        setDetails({});
        console.log(bookError);
      },
    });

  useEffect(() => {
    getBookDetails();
  }, [getBookDetails]);

  return (
    <CommonLayout>
      {loading ? (
        <Container>
          <LottieAnimation lotti={LoadAnimation} height={500} width={500} />
        </Container>
      ) : (
        <Grid
          container
          direction="column"
          spacing={3}
          style={{ marginTop: "16px" }}
        >
          <Grid item md={12} xs={12}>
            <Container>
              <Grid container spacing={3} alignItems="center" justify="center">
                <Grid item xs={12} md={6} lg={6} xl={6}>
                  {details.coverImageUrl === "" ? (
                    <></>
                  ) : (
                    <img
                      width="420px"
                      style={{ borderRadius: "8px" }}
                      src={`https://bookflix-dev.s3.ap-southeast-1.amazonaws.com/${details.coverImageUrl}`}
                      alt={details.title}
                    />
                  )}
                </Grid>
                <Grid item xs={12} md={6} lg={6} xl={6}>
                  <Grid container direction="column" spacing={6}>
                    <Grid item>
                      <Typography variant="h1" align="left">
                        {details.title}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="h2" align="left">
                        By{" "}
                        {details.authors.length !== 0
                          ? details.authors[0].name
                          : ""}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Grid
                        container
                        spacing={3}
                        alignItems="center"
                        justify="center"
                      >
                        {details.genres.map((genre, id) => {
                          return (
                            <Grid item key={id}>
                              <Chip
                                variant="default"
                                color="secondary"
                                label={genre.name}
                              />
                            </Grid>
                          );
                        })}
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Grid container spacing={3}>
                        <Typography variant="h3" align="left">
                          {details.description}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid
                      item
                      style={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      {/* <RouterLink to="/read"> */}
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => history.push(`/home/${details.id}/read`)}
                      >
                        Start Reading
                      </Button>
                      {/* </RouterLink> */}
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Container>
          </Grid>

          <Grid item md={12} xs={12}>
            <Feed feed={feed} />
          </Grid>
        </Grid>
      )}
    </CommonLayout>
  );
};

export default DetailsView;
