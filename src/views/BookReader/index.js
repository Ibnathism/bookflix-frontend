import React, { useState } from "react";
import { ReactReader } from "react-reader";
import CommonLayout from "../../layouts/CommonLayout";
import { Container } from "@material-ui/core";
const storage = global.localStorage || null;

const BookReaderView = () => {
  const [location, setLocation] = useState(
    storage && storage.getItem("epub-location")
      ? storage.getItem("epub-location")
      : 2
  );

  const onLocationChanged = () => {
    setLocation(storage && storage.setItem("epub-location", location));
  };
  return (
    <CommonLayout>
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
            url={"/alice.epub"}
            title={"Alice in wonderland"}
            location={location}
            locationChanged={onLocationChanged}
          />
        </div>
      </Container>
    </CommonLayout>
  );
};

export default BookReaderView;
