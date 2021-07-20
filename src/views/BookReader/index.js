import CommonLayout from "../../layouts/CommonLayout";
import BookReader from "../../components/Reader";
import { GET_BOOK_URL } from "../../graphql/Queries";
import { useLazyQuery } from "@apollo/client";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

const ReaderView = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState(null);

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
  return (
    <CommonLayout>
      {url ? (
        <BookReader
          title={title}
          link={`https://bookflix-dev.s3.ap-southeast-1.amazonaws.com/${url}`}
        />
      ) : (
        <></>
      )}
    </CommonLayout>
  );
};

export default ReaderView;
