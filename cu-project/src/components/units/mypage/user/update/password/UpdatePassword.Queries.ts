import { gql } from "@apollo/client";

export const UPDATE_USER = gql`
  mutation updateUser(
    $name: String!
    $nickname: String!
    $phonenumber: String!
    $password: String!
  ) {
    updateUser(
      name: $name
      nickname: $nickname
      phonenumber: $phonenumber
      password: $password
    ) {
      id
    }
  }
`;

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password)
  }
`;

export const FETCH_MY_USER = gql`
  query fetchmyuser {
    fetchmyuser {
      email
      name
      nickname
      phonenumber
    }
  }
`;

export const LOGOUT = gql`
  mutation logout {
    logout
  }
`;
