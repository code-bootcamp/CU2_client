import { gql } from "@apollo/client";

export const FETCH_COACH_USER_LIST = gql`
  query fetchCoachUserList {
    fetchCoachUserList {
      id
      name
      score
      followernumber
      coachProfile {
        id
        orgName
        orgType
        department
        job
      }
      coachtag {
        tag
      }
    }
  }
`;
