import CommonLayout from "../../layouts/CommonLayout";
import BookReader from "../../components/Reader";
import { GET_BOOK_URL, GET_HISTORY } from "../../graphql/Queries";
import { UPDATE_READING_HISTORY } from "../../graphql/Mutations";
import { useMutation, useLazyQuery } from "@apollo/client";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

const ReaderView = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState(null);
  const [location, setLocation] = useState(null);

  const [getHistory, { data: historyData }] = useLazyQuery(GET_HISTORY, {
    variables: {
      bookId: id,
    },
    onCompleted: () => {
      //console.log("got history", historyData);
      historyData && historyData.userBookInteraction
        ? setLocation(historyData.userBookInteraction.currentPageLocation)
        : setLocation(null);
    },
    onError: () => {
      console.log("Could not get reading history");
    },
  });

  const [updateReadingHistory] = useMutation(UPDATE_READING_HISTORY, {
    variables: {
      bookId: id,
      location: location,
    },
    onCompleted: (data) => {
      console.log("updated", data.updateBookReadingHistory.currentPageLocation);
    },
    onError: () => {
      console.log("Could not update reading history");
    },
  });

  const [getBookUrl, { data, error }] = useLazyQuery(GET_BOOK_URL, {
    variables: {
      id: id,
    },
    onCompleted: () => {
      //console.log(data);
      const res = JSON.parse(JSON.stringify(data.book));
      setTitle(res.title);
      setUrl(res.fileUrl);
    },
    onError: () => {
      setTitle("");
      setUrl("");
      console.log(error);
    },
  });

  useEffect(() => {
    getBookUrl();
  }, [getBookUrl]);

  useEffect(() => {
    getHistory();
  }, [getHistory]);

  useEffect(() => {
    if (location) {
      updateReadingHistory();
      console.log("useEffect", location);
    }
  }, [location, updateReadingHistory]);

  return (
    <CommonLayout>
      {url ? (
        <BookReader
          title={title}
          link={`https://bookflix-dev.s3.ap-southeast-1.amazonaws.com/${url}`}
          location={location}
          onLocationChanged={(location) => {
            if (location) {
              setLocation(location);
              //updateReadingHistory();
            }
          }}
        />
      ) : (
        <></>
      )}
    </CommonLayout>
  );
};

export default ReaderView;
