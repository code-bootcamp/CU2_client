import { gql } from "@apollo/client";

export const FETCH_COACH_ORDER_LIST = gql`
  query fetchUserOrderbyscore {
    fetchUserOrderbyscore {
      id
      name
      score
      coachProfile {
        orgName
        orgType
        department
        job
      }
      role
      coachtag {
        tag
      }
    }
  }
`;
