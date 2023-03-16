import { gql } from '@apollo/client';

export const QUERY_USER = gql`
    query user($usermame: String!) {
        user(username: $username) {
            _id
            username
            email
            highscore
        }
    }
`;

export const QUERY_ME_SCORES = gql`
    query me {
        me {
            username
            highscore
        }
    }
`;