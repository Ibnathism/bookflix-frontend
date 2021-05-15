import React, { useState } from "react";
import { ReactReader } from "react-reader";
import { Container } from "@material-ui/core";
const storage = global.localStorage || null;

const book = {
  title: "Alice in wonderland",
  link: "/alice.epub",
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
          //left: "1rem",
          //right: "1rem",
          //bottom: "1rem",
          //transition: "all 0.6s ease 0 0 5px rgba(0, 0, 0, 0.3)",
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
