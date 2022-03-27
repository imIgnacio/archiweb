import { gql } from '@apollo/client';

export const QUERY_POSTS = gql`

    query getPosts() {
        posts {
            _id
            subject
            content
            image
        }
    }
`;

export const QUERY_POST = gql`
    query getPost($_id: ID) {
        post(_id: $_id) {
            _id
            subject
            content
            image
        }
    }
`;

export const QUERY_USER = gql`
  {
    user {
      first
      last
      email
      posts {
        _id
        subject
        image
        content
      }
    }
  }
`;