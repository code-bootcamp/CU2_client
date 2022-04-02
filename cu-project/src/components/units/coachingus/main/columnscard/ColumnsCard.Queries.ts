import { gql } from "@apollo/client";

export const FETCH_COLUMN_LIST = gql`
  query fetchRecommendColumnList {
    fetchRecommendColumnList {
      id
      title
      contents
      hits
      likecount
      dislikecount
      user {
        id
        coachProfile {
          orgName
          orgType
          department
          job
        }
        role
      }
    }
  }
`;
