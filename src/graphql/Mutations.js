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
