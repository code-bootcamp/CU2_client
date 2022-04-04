import { gql } from "@apollo/client";

export const CREATE_STACK = gql`
  mutation createStack(
    $stacktag: [String!]!
    $contents: String!
    $title: String!
  ) {
    createStack(stacktag: $stacktag, contents: $contents, title: $title) {
      id
    }
  }
`;
