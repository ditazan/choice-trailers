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

type Auth {
    token: ID
    user: User
}

type Query {
    trailer(_id: ID!): Trailer
    user: User
    filters: [Filter]
    trailers(filter: ID, name: String): [Trailer] 
}

type Mutation {
    addUser(companyName: String, firstName: String, lastName: String, email: String!, password: String!): Auth
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    updateTrailer(_id: ID!, quantity: Int!): Trailer
    login(email: String!, password: String!): Auth
}
`;
