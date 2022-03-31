import { gql } from "@apollo/client";

export const CREATE_COACH_PROFILE = gql`
  mutation createCoachProfile($createProfileInput: CreateCoachProfileInput!) {
    createCoachProfile(createProfileInput: $createProfileInput) {
    #   coachProfile {
    #     id
    #     orgName
    #     orgType
    #     orgEmail
    #     department
    #     job
    #     profileTitle
    #     profileContents
    #     image
    #     answerInitAmount
    #   }
      role
    }
  }
`;
