import { gql } from "@apollo/client";

export const FETCH_MY_USER = gql`
  query fetchmyuser {
    fetchmyuser {
      nickname
      point
      score
    }
  }
`;

export const FETCH_MAINSTACK = gql`
  query fetchmainstack {
    fetchmainstack
  }
`;
