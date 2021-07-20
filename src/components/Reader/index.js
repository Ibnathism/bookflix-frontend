import React from "react";
import { ReactReader } from "react-reader";
import { Container, Typography } from "@material-ui/core";
import { ReaderContainer } from "./styledComponent";
import LoadAnimation from "../../animations/feed-loading.json";
import LottieAnimation from "../../helpers/lottie";

const BookReader = ({ title, link, location, onLocationChanged }) => {
  return (
    <Container
      style={{ display: "flex", justifyContent: "center", marginTop: "16px" }}
    >
      <Typography variant={title.length >= 30 ? "h3" : "h2"}>
        {title}
      </Typography>
      <ReaderContainer>
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
              if (!t) {
                t = spine_get(target);
              }
              return t;
            };
          }}
        />
      </ReaderContainer>
    </Container>
  );
};

export default BookReader;
