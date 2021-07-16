import { gql } from "@apollo/client";

export const GET_BOOK_URL = gql`
  query getBookName($id: ID!) {
    book(bookId: $id) {
      title
      fileUrl
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

export const GET_MY_LIST = gql`
  query getMyList($paginate: PaginationInput) {
    myList(paginate: $paginate) {
      books {
        id
        title
        coverImageUrl
        genres {
          name
        }
      }
    }
  }
`;

export const SEARCH = gql`
  query search($filter: String!) {
    search(filter: $filter) {
      books {
        title
        id
        coverImageUrl
        authors {
          name
        }
      }
    }
  }
`;
