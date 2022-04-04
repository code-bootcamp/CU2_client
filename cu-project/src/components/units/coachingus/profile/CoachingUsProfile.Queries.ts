import { gql } from "@apollo/client";

// export const sample = gql`
// `;

export const FETCH_COACH_USER = gql`
  query fetchCoachUser($userId: String!) {
    fetchCoachUser(userId: $userId) {
      score
      coachProfile {
        orgName
        orgType
        job
        image
        answerInitAmount
        department
        profileTitle
        profileContents
      }
    }
  }
`;

export const FETCH_COACH_COLUMNS = gql`
  query fetchColumnList {
    fetchColumnList {
      id
      title
      contents
      likecount
      dislikecount
      user {
        id
        name
        email
        coachProfile {
          id
        }
      }
    }
  }
`;
