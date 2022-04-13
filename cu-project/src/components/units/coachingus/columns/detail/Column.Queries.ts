import { gql } from "@apollo/client";

export const FETCH_DETAIL_COLUMN = gql`
  query fetchDetailColumn($columnId: String!) {
    fetchDetailColumn(columnId: $columnId) {
      id
      title
      contents
      hits
      likecount
      dislikecount
      user {
        name
      }
    }
  }
`;

export const DELETE_COLUMN = gql`
  mutation deleteColumn($columnId: String!) {
    deleteColumn(columnId: $columnId)
  }
`;
