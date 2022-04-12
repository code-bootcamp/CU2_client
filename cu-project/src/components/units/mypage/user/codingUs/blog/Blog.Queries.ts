import { gql } from "@apollo/client";

export const FETCH_MY_BLOG = gql`
  query fetchmyBlog {
    fetchmyBlog {
      id
      title
      contents
      url
      like
      dislike
      createAt
      updatedat
      # blogtag {
      #   tag
      # }
      # blogcategorytag {
      #   tag
      # }
      user {
        nickname
      }
    }
  }
`;
