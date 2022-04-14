import { gql } from "@apollo/client";

export const FETCH_COACH_ORDER_LIST = gql`
  query fetchUserOrderbyscore {
    fetchUserOrderbyscore {
      id
      name
      score
      followernumber
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

export const CREATE_FOLLOW = gql`
  mutation createFollow($followUserId: String!) {
    createFollow(followUserId: $followUserId) {
      id
      following {
        id
        name
      }
      follower {
        id
        name
      }
    }
  }
`;
