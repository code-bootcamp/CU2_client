import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation loginU($email: String!, $password: String!) {
    login(email: $email, password: $password)
  }
`;
