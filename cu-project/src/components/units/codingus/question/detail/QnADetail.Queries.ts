import { gql } from "@apollo/client";

export const FETCH_STACK_ONE_BY_STACK_ID = gql`
  query fetchStackOnebystackid($stackid: String!) {
    fetchStackOnebystackid(stackid: $stackid) {
      id
      title
      contents
      user {
        nickname
      }
      like
      dislike
      createAt
      stacktag {
          tag
      }
    }
  }
`;

// export const FETCH_ALL_STACK_COMMENT = gql`
//     query fetchAllStackcomment($stackid: String!){
//         fetchAllStackcomment(stackid: $stackid){
//             id
//             contents
//             user{
//                 nickname
//             }
//             like
//             dislike
//         }
//     }
// `

export const CREATE_STACK_COMMENT = gql`
  mutation createStackComment($contents: String!, $stackid: String!){
    createStackComment(contents: $contents, stackid: $stackid){
      id
    }
  }
`

export const UPDATE_STACK = gql`
mutation updateStack($stackid: String!, $contents: String!, $title: String!){
  updateStack(stackid: $stackid, contents: $contents, title: $title){
    id
  }
}
`;

export const DELETE_STACK = gql`
  mutation deleteStack($stackid: String!){
    deleteStack(stackid: $stackid)
  }
`