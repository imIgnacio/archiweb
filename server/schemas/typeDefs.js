const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        first: String
        last: String
        email: String
        password: String
        posts: [Post]
    }

    type Post {
        _id: ID
        subject: String
        image: String
        creator: User
    }

    type Auth {
        token: ID
        user: User
    }

    type Query {
        posts: [Post]
        post(_id: ID): Post
        user: User
    }

    type Mutation {
        addUser(fisrt: String!, last: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        updateUser(firstName: String, lastName: String, email: String, password: String): User
        addPost(_id: ID!, subject: String!, image: String, creator: ID): Post
    }
`;

module.exports = typeDefs;