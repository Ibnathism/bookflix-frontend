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

export const LOGIN = gql`
  mutation userLogin($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        name
      }
    }
  }
`;
