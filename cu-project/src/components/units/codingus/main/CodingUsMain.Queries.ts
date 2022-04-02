import { gql } from "@apollo/client";

export const FETCH_BLOG_ALL = gql`
  query fetchBlogAll {
    fetchBlogAll {
      id
      title
      contents
      blogtag {
        tag
      }
      blogcategorytag {
        tag
      }
      user {
        nickname
      }
      createAt
      like
    }
  }
`;
export const FETCH_BLOG_LIKE = gql`
  query fetchBloglike {
    fetchBloglike {
      id
    }
  }
`;
