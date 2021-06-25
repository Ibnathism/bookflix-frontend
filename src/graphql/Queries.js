import { gql } from "@apollo/client";

export const GET_BOOK_TITLE = gql`
  query getBookName($id: ID!) {
    book(bookId: $id) {
      title
      authors {
        name
      }
    }
  }
`;

export const GET_BOOK_DETAILS = gql`
  query getBookDetails($id: ID!) {
    book(bookId: $id) {
      title
      fileUrl
      fileType
      coverImageUrl
      genres {
        name
      }
    }
  }
`;
