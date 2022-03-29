// import {gql} from "@apollo/client"

import gql from "graphql-tag";

export const CHECK_TOKEN = gql`
  mutation checktoken($phonenumber: String!, $token: String!) {
    checktoken(phonenumber: $phonenumber, token: $token)
  }
`;

export const SEND_TOKEN_TO_SMS = gql`
  mutation sendTokenTOSMS($phonenumber: String!) {
    sendTokenTOSMS(phonenumber: $phonenumber)
  }
`;

export const CREATE_USER = gql`
  mutation createUser(
    $name: String!
    $nickname: String!
    $phonenumber: String!
    $password: String!
    $email: String!
  ) {
    createUser(
      name: $name
      nickname: $nickname
      phonenumber: $phonenumber
      password: $password
      email: $email
    ){
        id
    }
  }
`;
