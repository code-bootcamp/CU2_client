import { gql } from "@apollo/client";

export const FETCH_MY_BLOG = gql`
  query fetchmyBlog {
    fetchmyBlog {
      title
      contents
      like
      createAt
      # blogtag {
      #   tag
      # }
      # blogcategorytag {
      #   tag
      # }
    }
  }
`;
