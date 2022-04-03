// fetchStackAll
// fetchmyStack
// fetchotherStackorderbylike

import { gql } from "@apollo/client";

export const FETCH_OTHER_STACK_OREDRBY_LIKE = gql`
  query fetchotherStackorderbylike {
    fetchotherStackorderbylike {
      id
      title
      contents
      user {
        nickname
      }
      like
      stacktag {
        tag
      }
      # createAt
    }
  }
`;

// id: String!
// title: String!
// contents: String!
// user: User!
// like: Int!
// dislike: Int!
// stacktag: {tag : string}[]
