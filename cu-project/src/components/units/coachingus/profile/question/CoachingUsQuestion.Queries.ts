import { gql } from "@apollo/client";

export const FETCH_MY_USER = gql`
  query fetchmyuser {
    fetchmyuser {
      id
      name
      nickname
      role
    }
  }
`;

export const CREATE_COACH_QUESTION = gql`
  mutation createCoachQuestion(
    $createQuestionInput: CreateQuestionInput!
    $coachId: String!
  ) {
    createCoachQuestion(
      createQuestionInput: $createQuestionInput
      coachId: $coachId
    ) {
      id
      title
      contents
    }
  }
`;
