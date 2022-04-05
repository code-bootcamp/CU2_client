import { gql } from "@apollo/client";

export const FETCH_COACH_QUESTION_LIST = gql`
  query fetchCoachQuestionList {
    fetchCoachQuestionList {
      id
      title
      contents
      fromUser {
        nickname
      }
      toCoach {
        id
        name
      }
    }
  }
`;
