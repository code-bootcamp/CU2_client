import { gql } from "@apollo/client";

export const CREATE_COLUMN = gql`
  mutation createColumn($createColumnInput: CreateColumnInput!) {
    createColumn(createColumnInput: $createColumnInput) {
      id
      title
      contents
      hits
      likecount
      dislikecount
      user {
        id
      }
    }
  }
`;

export const PLUSUSERSCORE = gql`
  mutation plususerscore($score: Float!) {
    plususerscore(score: $score) {
      id
      email
      name
    }
  }
`;

export const FETCH_COLUMN = gql`
  query fetchDetailColumn($columnId: String!) {
    fetchDetailColumn(columnId: $columnId) {
      id
      title
      contents
    }
  }
`;

export const UPDATE_COLUMN = gql`
  mutation updateColumn(
    $columnId: String!
    $updateColumnInput: UpdateColumnInput!
  ) {
    updateColumn(columnId: $columnId, updateColumnInput: $updateColumnInput) {
      id
      title
      contents
      createdAt
      user {
        id
      }
    }
  }
`;
