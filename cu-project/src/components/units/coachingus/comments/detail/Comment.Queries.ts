import { gql } from "@apollo/client";

export const FETCH_QUESTION = gql`
  query fetchQuestion($questionId: String!) {
    fetchQuestion(questionId: $questionId) {
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

export const FETCH_MY_USER = gql`
  query fetchmyuser {
    fetchmyuser {
      id
    }
  }
`;

export const LIKE_TOGGLE = gql`
  mutation likeAnswerToggle($answerId: String!) {
    likeAnswerToggle(answerId: $answerId) {
      id
      isLike
    }
  }
`;
export const DISLIKE_TOGGLE = gql`
  mutation dislikeAnswerToggle($answerId: String!) {
    dislikeAnswerToggle(answerId: $answerId) {
      id
      isLike
    }
  }
`;
