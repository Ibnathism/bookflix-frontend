import { Container, Typography } from "@material-ui/core";
import CommonLayout from "../../layouts/CommonLayout";
import { useLazyQuery } from "@apollo/client";
import { GET_BOOK_URL } from "../../graphql/Queries";
import { useState } from "react";
const TestView = () => {
  const [bookId, setBookId] = useState();
  const [getTitle, { data, error }] = useLazyQuery(GET_BOOK_URL, {
    variables: {
      id: bookId,
    },
  });
  if (error) return <h1>Error Found</h1>;

  if (data) {
    //console.log(data);
  }
  return (
    <CommonLayout>
      <Container
        style={{
          marginTop: "16px",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "space-around",
        }}
      >
        <div className="home">
          <Typography color="primary" variant="h1">
            Search
          </Typography>
          <input
            type="text"
            placeholder="Book ID..."
            onChange={(event) => {
              setBookId(event.target.value);
            }}
          />
          <button onClick={() => getTitle()}>Search Book</button>
          <div className="weather">
            {data && (
              <>
                <Typography variant="h1">{data.book.fileUrl}</Typography>
              </>
            )}
          </div>
        </div>
      </Container>
    </CommonLayout>
  );
};

export default TestView;
