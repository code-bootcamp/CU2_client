import { gql } from "@apollo/client";

export const FETCH_USER_ORDER_BY_SCORE = gql`
  query fetchUserOrderbyscore {
    fetchUserOrderbyscore {
      id
      nickname
      score
    }
  }
`;
export const FETCH_MY_USER = gql`
  query fetchmyuser {
    fetchmyuser {
      id
      nickname
      score
    }
  }
`;
