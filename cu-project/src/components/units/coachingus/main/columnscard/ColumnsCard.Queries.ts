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
      createdAt
      user {
        id
        name
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
