import React, { useState } from "react";
import { ReactReader } from "react-reader";
import { Container } from "@material-ui/core";
import LoadAnimation from "../../animations/feed-loading.json";
import LottieAnimation from "../../helpers/lottie";
const storage = global.localStorage || null;

const BookReader = ({ title, link }) => {
  const [location, setLocation] = useState(null);
  const onLocationChanged = (location) => {
    setLocation(location);
    storage.setItem("epub-location", location);
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
          loadingView={
            <LottieAnimation lotti={LoadAnimation} height={500} width={500} />
          }
          getRendition={(rendition) => {
            const spine_get = rendition.book.spine.get.bind(
              rendition.book.spine
            );
            rendition.book.spine.get = function (target) {
              let t = spine_get(target);
              console.log("t", t);
              target = target.toString();
              console.log("target", target);
              if (!t) {
                t = spine_get(target);
              }
              return t;
            };
          }}
        />
      </div>
    </Container>
  );
};

export default BookReader;
