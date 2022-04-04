import { gql } from "@apollo/client";

export const FETCH_COMMENTS = gql`
  query fetchQuestionList {
    fetchQuestionList {
      id
      title
      fromUser {
        id
        nickname
      }
      toCoach {
        id
        name
        nickname
        coachProfile {
          orgName
          department
          job
        }
      }
      contents
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
      }
      likecount
      dislikecount
    }
  }
`;
