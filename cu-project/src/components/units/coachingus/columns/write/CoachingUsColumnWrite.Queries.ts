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

export const PLUSUSERSCORE = gql`
  mutation plususerscore($score: Float!) {
    plususerscore(score: $score) {
      id
      email
      name
    }
  }
`;
