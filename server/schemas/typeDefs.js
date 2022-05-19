const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Trailer {
    _id: ID
    name: String
    description: String
    iamge: String
    filter: Filter
  }

  type User {
    _id: ID
    companyName: String
    firstName: String
    lastName: String
    email: String
}
type Filter {
    _id: ID
    name: String
}
`;
