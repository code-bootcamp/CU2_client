import { gql } from "@apollo/client";

export const FETCH_COACH = gql`
  query fetchCoachUser($userId: String!) {
    fetchCoachUser(userId: $userId) {
      id
      coachProfile {
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
      hits
      likecount
      dislikecount
      user {
        id
        name
      }
    }
  }
`;

export const FETCH_COACH_COMMENTS = gql`
  query fetchQuestionListPerCoach($coachId: String!) {
    fetchQuestionListPerCoach(coachId: $coachId) {
      id
      title
      contents
      toCoach {
        id
        name
      }
      fromUser {
        id
        name
      }
    }
  }
`;
export const FETCH_ANSWER = gql`
  query coachAnsweredList {
    coachAnsweredList {
      id
      title
      contents
      amount
      question {
        id
        toCoach {
          id
          name
        }
      }
      likecount
      dislikecount
    }
  }
`;
