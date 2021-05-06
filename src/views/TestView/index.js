import { Container } from "@material-ui/core";
import BookCardA from "../../components/BookCardA";
import BookCardB from "../../components/BookCardB";
const TestView = () => {
  const genreList = [
    {
      name: "Crime",
    },
    {
      name: "Thriller",
    },
    {
      name: "Drama",
    },
  ];
  const review =
    "“As thrilling and smart as it is terrifying. There have been a number of big-gun literary series brought to screen over the past decade. This slays them all.”  - The Guardian";
  return (
    <Container
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-around",
      }}
    >
      <BookCardA imageUrl="/images/10.jpg" genreList={genreList} />
      <BookCardB imageUrl="/images/10.jpg" review={review} />
    </Container>
  );
};

export default TestView;
