import { gql } from '@apollo/client';

export const LOGIN = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                first
                last
            }
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser($first: String!, $last: String!, $email: String!, $password: String!) {
        addUser(first: $first, last: $last, email: $email, password: $password) {
            token
            user {
                _id
            }
        }
    }
`;

export const ADD_POST = gql`
    mutation addPost($subject: String!, $content: String!, $image: String, $creator: ID!) {
        addPost(subject: $subject, content: $content, image: $image, creator: $creator) {
            post {
                _id
                subject
                content
                image
                creator {
                    _id
                }
            }
        }
    }
`;