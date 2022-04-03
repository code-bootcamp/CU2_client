// fetchStackAll
// fetchmyStack
// fetchotherStackorderbylike

import { gql } from "@apollo/client";

export const FETCH_OTHER_STACK_OREDRBY_LIKE = gql`
  query fetchotherStackorderbylike {
    fetchotherStackorderbylike {
      id
      title
      contents
      user {
        nickname
      }
      like
      stacktag {
        tag
      }
      # createAt
    }
  }
`;
export const FETCH_STACK_ALL = gql`
  query fetchStackAll{
    fetchStackAll{
      id
      title
      contents
      user {
        nickname
      }
      like
      stacktag {
        tag
      }
      # createAt
    }
  }
`
export const FETCH_MY_STACK = gql`
  query fetchmyStack{
    fetchmyStack{
      id
      title
      contents
      user {
        nickname
      }
      like
      stacktag {
        tag
      }
      # createAt
    }
  }
`

