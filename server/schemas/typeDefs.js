const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID
    username: String
    email: String
    password: String
    highscore: [Int]
  }

  type Auth {
    token: ID!
    user: User
  }
  
  type Query {
    users: [User]
    user(username: String!): User
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth # ! = required
    login(email: String!, password: String!): Auth
    addNewHighScore(score: Int!, indexToAddTo: Int!): User
  }
`;

module.exports = typeDefs;