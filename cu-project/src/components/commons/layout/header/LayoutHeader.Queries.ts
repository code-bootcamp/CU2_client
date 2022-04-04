import { gql } from "@apollo/client";

export const LOGOUT = gql`
  mutation logout {
    logout
  }
`;

export const FETCH_BLOG_SEARCH = gql`
  query fetchBlogSearch($search: String!) {
    fetchBlogSearch(search: $search) {
      id
      title
      contents
      createdAt
      like
      user {
        name
        nickname
      }
      blogtag {
        tag
      }
      blogcategorytag {
        tag
      }
    }
  }
`;
