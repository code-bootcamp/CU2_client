import { gql } from "@apollo/client";

export const FETCH_MY_POINT_HISTORY = gql`
  query fetchMyPointHistory {
    fetchMyPointHistory {
      id
      impUid
      amount
    }
  }
`;
