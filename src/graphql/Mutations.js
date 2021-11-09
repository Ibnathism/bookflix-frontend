import { gql } from "@apollo/client";

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

export const SIGNUP = gql`
  mutation userSignup($username: String!, $name: String!, $password: String!) {
    signup(username: $username, name: $name, password: $password) {
      token
      user {
        name
      }
    }
  }
`;

export const SET_FAV_GENRE = gql`
  mutation setFavGenre($genreIds: [ID!]!, $operation: AddOrRemove!) {
    setFavoriteGenres(genreIds: $genreIds, operation: $operation) {
      count
    }
  }
`;

export const SET_FAV_AUTHOR = gql`
  mutation setFavAuthors($authorIds: [ID!]!, $operation: AddOrRemove!) {
    setFavoriteAuthors(authorIds: $authorIds, operation: $operation) {
      count
    }
  }
`;

export const SET_FAV_BOOK = gql`
  mutation setFavBooks($bookIds: [ID!]!, $operation: AddOrRemove!) {
    setFavoriteBooks(bookIds: $bookIds, operation: $operation) {
      count
    }
  }
`;

export const SET_BOOK_TO_LIST = gql`
  mutation setBookToList($bookId: ID!, $operation: AddOrRemove!) {
    setBookToReadLater(bookId: $bookId, operation: $operation) {
      book {
        title
      }
      user {
        name
      }
    }
  }
`;

export const UPDATE_READING_HISTORY = gql`
  mutation updateReadingHistory($bookId: ID!, $location: String!) {
    updateBookReadingHistory(
      bookId: $bookId
      update: { currentPageLocation: $location }
    ) {
      book {
        title
        id
      }
      currentPageLocation
      lastUpdate
    }
  }
`;
