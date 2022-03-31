import { gql } from "@apollo/client";

export const FETCH_BLOG = gql`
  query fetchBlog($blogId: String!) {
    fetchBlog(blogId: $blogId) {
      id
      title
      contents
      user{
        nickname
      }
      like
      dislike
      blogtag{
        tag
      }
      blogcategorytag {
        tag
      }
    }
  }
`;

export const DELETE_BLOG = gql`
mutation deletBoard($blogid: String!){
    deletBoard(blogid: $blogid)
}`
