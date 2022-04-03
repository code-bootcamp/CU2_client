import { gql } from "@apollo/client";

export const FETCH_STACK_MY_LIKE = gql`
  query fetchStackmylike {
    fetchStackmylike {
      id
      title
      contents
      like
      user {
        nickname
      }
      stacktag {
        tag
      }
    }
  }
`;
