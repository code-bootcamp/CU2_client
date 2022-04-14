import { gql } from "@apollo/client";

export const CREATE_POINT = gql`
  mutation createPointTransaction($amount: Float!, $impUid: String!) {
    createPointTransaction(amount: $amount, impUid: $impUid) {
      amount
      impUid
    }
  }
`;

export const FETCH_MY_USER = gql`
  query fetchmyuser {
    fetchmyuser {
      name
      email
      phonenumber
    }
  }
`;

export const FETCH_MY_POINT_HISTORY_BY_PAGE = gql`
  query fetchmypointHistorybypage($page: Float!, $perpage: Float!) {
    fetchmypointHistorybypage(page: $page, perpage: $perpage) {
      id
      impUid
      amount
      status
    }
  }
`;
