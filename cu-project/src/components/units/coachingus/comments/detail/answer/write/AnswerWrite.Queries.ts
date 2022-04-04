import { gql } from "@apollo/client";

export const CREATE_ANSWER = gql`
  mutation createCoachAnswer(
    $createAnswerInput: CreateAnswerInput!
    $questionId: String!
  ) {
    createCoachAnswer(
      createAnswerInput: $createAnswerInput
      questionId: $questionId
    ) {
      id
      title
      contents
    }
  }
`;
