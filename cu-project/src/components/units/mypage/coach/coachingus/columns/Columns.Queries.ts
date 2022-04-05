import { gql } from "@apollo/client";

export const FETCH_MY_COLUMN = gql`
  query fetchMyColumn {
    fetchMyColumn {
      id
      title
      contents
      likecount
      dislikecount
      user {
        name
      }
    }
  }
`;
