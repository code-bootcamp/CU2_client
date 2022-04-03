import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password)
  }
`;

export const FETCH_COACH_USER_LIST = gql`
  # codeInterest
  # coachInterest
  # coachProfile {
  #   id
  #   orgName
  #   orgType
  #   orgEmail
  #   department
  #   job
  #   profileTitle
  #   profileContents
  #   image
  #   answerInitAmount
  # }
  # mainstack {
  #   id
  #   Python
  #   C
  #   Java
  #   Cpp
  #   Cshop
  #   JavaScript
  #   PHP
  #   SQL
  #   R
  #   Go
  #   Swift
  #   Ruby
  #   Git
  #   Objective_C
  #   CSS
  #   HTML
  #   React_js
  #   Vue_js
  #   Node_js
  #   Express
  #   Spring
  #   etc
  # }
  # user {
  #   id
  #   Python
  #   C
  #   Java
  #   Cpp
  #   Cshop
  #   JavaScript
  #   PHP
  #   SQL
  #   R
  #   Go
  #   Swift
  #   Ruby
  #   Git
  #   Objective_C
  #   CSS
  #   HTML
  #   React_js
  #   Vue_js
  #   Node_js
  #   Express
  #   Spring
  #   etc
  # }
  query fetchCoachUserList {
    fetchCoachUserList {
      id
      email
      name
      phonenumber
      nickname
      score
      point
    } 
  }
`;
