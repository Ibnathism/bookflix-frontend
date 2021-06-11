import { Container, Grid, Typography } from "@material-ui/core";
import CommonLayout from "../../layouts/CommonLayout";
import BookCardA from "../../components/BookCardA";
import myList from "../../data/mylist.json";
const MyListView = () => {
  return (
    <CommonLayout>
      <Container>
        <Typography variant="h2" style={{ marginTop: "16px" }}>
          In your list
        </Typography>
        <Grid container spacing={3} style={{ marginTop: "16px" }}>
          {myList.map((book, id) => {
            return (
              <Grid item key={id}>
                <BookCardA
                  imageUrl={book.imageUrl}
                  genreList={book.genreList}
                />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </CommonLayout>
  );
};

export default MyListView;
