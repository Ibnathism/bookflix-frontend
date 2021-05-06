import BookCardA from "../../components/BookCardA";
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
  return (
    <div>
      <BookCardA imageUrl="/images/10.jpg" genreList={genreList} />
    </div>
  );
};

export default TestView;
