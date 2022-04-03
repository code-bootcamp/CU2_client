import { gql } from "@apollo/client";

export const FETCH_OTHER_BLOG_ORDER_BY_LIKE_ALL = gql`
  query fetchotherBlogorderbylikeAll {
    fetchotherBlogorderbylikeAll {
      id
      url
      blogcategorytag {
        tag
      }
      title
      contents
      user {
        nickname
      }
      createAt
      updatedat
      like
    }
  }
`;

export const FETCH_OTHER_STACK_ORDER_BY_LIKE = gql`
  query fetchotherStackorderbylike {
    fetchotherStackorderbylike {
      title
      contents
      user {
        nickname
      }
      stacktag {
        tag
      }
    }
  }
`;
