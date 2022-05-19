import { gql } from "@apollo/client";

export const QUERY_ALL_TRAILERS = gql`
  {
    trailers {
      _id
      name
      description
      image
      filter {
        name
      }
    }
  }
`;

export const QUERY_TRAILERS = gql`
  query getTrailers($filter: ID) {
    trailers(filter: $filter) {
      _id
      name
      description
      image
      filter {
        _id
      }
    }
  }
`;

export const QUERY_FILTERS = gql`
  {
    filters {
      _id
      name
    }
  }
`;

export const QUERY_USER = gql`
  {
    user {
      companyName
    }
  }
`;
