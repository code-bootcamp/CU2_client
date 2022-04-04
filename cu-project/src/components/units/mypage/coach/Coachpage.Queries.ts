import { gql } from "@apollo/client";

export const FETCH_COACH_USER = gql`
  query fetchCoachUser($userId: String!) {
    fetchCoachUser(userId: $userId) {
      id
      nickname
      point
      score
    }
  }
`;

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
export const FETCH_USER_ORDER_BY_SCORE = gql`
  query fetchUserOrderbyscore {
    fetchUserOrderbyscore {
      id
      score
    }
  }
`;
