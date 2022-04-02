import { gql } from "@apollo/client";

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

export const FETCH_USER = gql`
  query fetchAllUser {
    fetchAllUser {
      name
      email
      phonenumber
    }
  }
`;
