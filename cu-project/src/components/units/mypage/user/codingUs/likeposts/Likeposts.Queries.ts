import { gql } from "@apollo/client";

export const FETCH_BLOG_LIKE = gql`
  query fetchBloglike {
    fetchBloglike {
      title
      contents
      url
      like
      createAt
      updatedat
      blogtag {
        tag
      }
      blogcategorytag {
        tag
      }
    }
  }
`;
