import React, { useState } from "react";
import { ReactReader } from "react-reader";
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
    <div
      style={{
        fontSize: "16px",
        position: "absolute",
        top: "135px",
        left: "1rem",
        right: "1rem",
        bottom: "1rem",
        transition: "all 0.6s ease 0 0 5px rgba(0, 0, 0, 0.3)",
      }}
    >
      <ReactReader
        url={"/1342.epub.images.epub"}
        title={"Alice in wonderland"}
        location={location}
        locationChanged={onLocationChanged}
      />
    </div>
  );
};

export default BookReaderView;
