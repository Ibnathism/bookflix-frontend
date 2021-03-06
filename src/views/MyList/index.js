import { Container, Grid, Typography } from "@material-ui/core";
import CommonLayout from "../../layouts/CommonLayout";
import BookCardA from "../../components/BookCardA";
import { useState, useEffect } from "react";
import { GET_MY_LIST } from "../../graphql/Queries";
import { useLazyQuery } from "@apollo/client";
import LottieAnimation from "../../helpers/lottie";
import LoadAnimation from "../../animations/feed-loading.json";

const MyListView = () => {
  const [myList, setMyList] = useState([]);

  const [getMyList, { data, loading, error }] = useLazyQuery(GET_MY_LIST, {
    variables: {
      paginate: {
        skip: 0,
        take: 100,
      },
    },
    onCompleted: () => {
      //console.log("on completed of mylist", data.readLaterList);
      const res = JSON.parse(JSON.stringify(data.readLaterList));
      setMyList(res.books);
    },
    onError: () => {
      setMyList([]);
      console.log(error);
    },
  });

  useEffect(() => {
    getMyList();
  }, [getMyList]);

  return (
    <CommonLayout>
      {loading ? (
        <Container>
          <LottieAnimation lotti={LoadAnimation} height={500} width={500} />
        </Container>
      ) : (
        <Container>
          <Typography variant="h2" style={{ marginTop: "16px" }}>
            In your list
          </Typography>
          <Grid container spacing={3} style={{ marginTop: "16px" }}>
            {myList.map((book, id) => {
              return (
                <Grid item key={id}>
                  {/* <RouterLink to={`/home/${book.id}`}> */}
                  <BookCardA
                    id={book.id}
                    imageUrl={`https://bookflix-dev.s3.ap-southeast-1.amazonaws.com/${book.coverImageUrl}`}
                    genreList={book.genres}
                    isFav={
                      book.UserBookInteraction
                        ? book.UserBookInteraction.isFavorite
                        : false
                    }
                    isOnList={
                      book.UserBookInteraction
                        ? book.UserBookInteraction.isOnReadLaterList
                        : false
                    }
                  />
                  {/* </RouterLink> */}
                </Grid>
              );
            })}
          </Grid>
        </Container>
      )}
    </CommonLayout>
  );
};

export default MyListView;
