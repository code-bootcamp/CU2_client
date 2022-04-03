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

export const FETCH_USER_ORDER_BY_SCORE = gql`
  query fetchUserOrderbyscore {
    fetchUserOrderbyscore {
      name
      nickname
    }
  }
`;

export const SEND_TOKEN_TO_SMS = gql`
  mutation sendTokenTOSMS($phonenumber: String!) {
    sendTokenTOSMS(phonenumber: $phonenumber)
  }
`;

export const CHECK_TOKEN = gql`
  mutation checktoken($phonenumber: String!, $token: String!) {
    checktoken(phonenumber: $phonenumber, token: $token)
  }
`;

export const LOGOUT = gql`
  mutation logout {
    logout
  }
`;
