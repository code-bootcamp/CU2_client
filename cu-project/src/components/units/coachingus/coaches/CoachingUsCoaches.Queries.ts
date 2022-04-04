import { gql } from "@apollo/client";

export const FETCH_MY_USER = gql`
  query fetchmyuser {
    fetchmyuser {
      id
      name
      score
      email
      role
    }
  }
`;

export const FETCH_COACH_ORDER_LIST = gql`
  query fetchUserOrderbyscore {
    fetchUserOrderbyscore {
      id
      name
      score
      coachProfile {
        orgName
        orgType
      }
      role
      coachtag {
        tag
      }
    }
  }
`;
