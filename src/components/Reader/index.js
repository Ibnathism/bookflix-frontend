import React, { useState } from "react";
import { ReactReader } from "react-reader";
import { Container } from "@material-ui/core";
const storage = global.localStorage || null;

const BookReader = ({ title, link }) => {
  const [location, setLocation] = useState(
    storage && storage.getItem("epub-location")
      ? storage.getItem("epub-location")
      : 15
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
          url={link}
          title={title}
          location={location}
          locationChanged={onLocationChanged}
        />
      </div>
    </Container>
  );
};

export default BookReader;
