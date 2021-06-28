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
      id
      fileUrl
      fileType
      coverImageUrl
      description
      rating
      genres {
        name
      }
      authors {
        name
      }
    }
  }
`;

export const GET_ALL_GENRE = gql`
  query getAllGenre {
    genres {
      genres {
        id
        name
      }
    }
  }
`;

export const GET_ALL_AUTHOR = gql`
  query getAllAuthor {
    authors {
      authors {
        id
        name
      }
    }
  }
`;

export const GET_FILTERED_BOOK = gql`
  query getFilteredBook($filter: BookFilterInput) {
    books(filter: $filter) {
      books {
        id
        title
        coverImageUrl
      }
      count
    }
  }
`;

export const GET_FEED = gql`
  query getFeed($bookCountEachCategory: Int!, $categoryCount: Int!) {
    feed(
      bookCountEachCategory: $bookCountEachCategory
      categoryCount: $categoryCount
    ) {
      id
      books {
        id
        title
        description
        coverImageUrl
        genres {
          name
        }
      }
      count
      category
    }
  }
`;
