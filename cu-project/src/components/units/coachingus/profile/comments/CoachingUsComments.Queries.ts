import { gql } from "@apollo/client";

export const FETCH_COACH_COMMENTS = gql`
  query fetchQuestionListPerCoach($coachId: String!) {
    fetchQuestionListPerCoach(coachId: $coachId) {
      id
      title
      contents
      createdAt
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
      createdAt
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
