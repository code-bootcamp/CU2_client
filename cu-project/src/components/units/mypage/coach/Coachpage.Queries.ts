import { gql } from "@apollo/client";

export const FETCH_COACH_USER = gql`
  query fetchCoachUser($userId: String!) {
    fetchCoachUser(userId: $userId) {
      nickname
      point
      score
    }
  }
`;
