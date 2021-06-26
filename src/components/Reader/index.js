import React, { useState } from "react";
import { ReactReader } from "react-reader";
import { Container } from "@material-ui/core";
const storage = global.localStorage || null;

const book = {
  title: "Alice in wonderland",
  //link: "https://bookflix-dev.s3.ap-southeast-1.amazonaws.com/books/Graph_Theory.pdf",
  link: "https://bookflix-dev.s3.ap-southeast-1.amazonaws.com/books/1064.epub.images.epub",
  //link: "https://bookflix-dev.s3.ap-southeast-1.amazonaws.com/books/45315.epub",
};

const BookReader = () => {
  const [location, setLocation] = useState(
    storage && storage.getItem("epub-location")
      ? storage.getItem("epub-location")
      : 2
  );
  const onLocationChanged = (location) => {
    setLocation(location);
    storage.setItem("epub-location", location);
    //setLocation(storage && storage.setItem("epub-location", location));
  };
  return (
    <Container>
      <div
        style={{
          fontSize: "16px",
          position: "absolute",
          width: "1320px",
          height: "804px",
          margin: "16px",
        }}
      >
        <ReactReader
          swipeable
          url={book.link}
          title={book.title}
          location={location}
          locationChanged={onLocationChanged}
        />
      </div>
    </Container>
  );
};

export default BookReader;
