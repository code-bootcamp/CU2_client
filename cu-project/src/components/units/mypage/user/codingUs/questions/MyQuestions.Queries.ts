import { gql } from "@apollo/client";

export const FETCH_MY_STACK = gql`
  query fetchmyStack {
    fetchmyStack {
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
