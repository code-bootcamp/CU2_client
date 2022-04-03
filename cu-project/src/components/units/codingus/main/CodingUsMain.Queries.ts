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

export const FETCH_BEST_USER_AND_BLOG = gql`
  query {
    fetchUserOrderbyscore {
      id
      name
      nickname
    }
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
        id
        nickname
      }
      like
      createAt
    }
  }
`;

export const FETCH_OTHER_STATE_ORDER_BY_LIKE = gql`
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
    }
  }
`;
