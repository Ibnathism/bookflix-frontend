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
  return (
    <div>
      <BookCardB imageUrl="/images/10.jpg" genreList={genreList} />
    </div>
  );
};

export default TestView;
