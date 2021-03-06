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
    genres(orderBy: { name: asc }) {
      genres {
        id
        name
      }
    }
  }
`;

export const GET_ALL_AUTHOR = gql`
  query getAllAuthor {
    authors(orderBy: { name: asc }) {
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
        UserBookInteraction {
          isFavorite
          isOnReadLaterList
        }
      }
      count
      category
    }
  }
`;

export const GET_MY_LIST = gql`
  query getMyList($paginate: PaginationInput) {
    readLaterList(paginate: $paginate) {
      books {
        id
        title
        coverImageUrl
        genres {
          name
        }
        UserBookInteraction {
          isFavorite
          isOnReadLaterList
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
        genres {
          name
        }
      }
    }
  }
`;

export const GET_HISTORY = gql`
  query getHistory($bookId: ID!) {
    userBookInteraction(bookId: $bookId) {
      currentPageLocation
    }
  }
`;
