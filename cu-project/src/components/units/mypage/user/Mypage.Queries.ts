import { gql } from "@apollo/client";

export const FETCH_MY_USER = gql`
  query fetchmyuser {
    fetchmyuser {
      nickname
      point
      score
      role
      email
      name
      id
    }
  }
`;

export const FETCH_MAINSTACK = gql`
  query fetchmainstack {
    fetchmainstack
  }
`;

export const FETCH_USER_ORDER_BY_SCORE = gql`
  query fetchUserOrderbyscore {
    fetchUserOrderbyscore {
      id
      score
    }
  }
`;
