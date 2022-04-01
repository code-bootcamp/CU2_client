import { gql } from "@apollo/client";

export const FETCH_MY_USER = gql`
  query fetchmyuser {
    fetchmyuser {
      nickname
    }
  }
`;
