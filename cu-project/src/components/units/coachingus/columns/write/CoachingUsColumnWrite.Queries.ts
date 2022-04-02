import { gql } from "@apollo/client";

export const CREATE_COLUMN = gql`
  mutation createColumn($createColumnInput: CreateColumnInput!) {
    createColumn(createColumnInput: $createColumnInput) {
      title
      contents
      hits
      likecount
      dislikecount
    }
  }
`;
