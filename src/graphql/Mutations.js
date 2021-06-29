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
