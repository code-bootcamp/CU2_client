import { gql } from "@apollo/client";
export const FETCH_OTHER_BLOG_ORDERBY_CREATEAT = gql`
  query fetchBlogByCreate {
    fetchotherBlogorderbycreateAt {
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

export const FETCH_OTHER_BLOG_ORDERBY_LIKE = gql`
  query fetchBlogByLike {
    fetchotherBlogorderbylikeAll {
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
    fetchBloglike{
        id
    }
  }
`;

export const FETCH_MY_FOLLOWING = gql`
  query fetchmyFollowing {
    fetchmyFollowing {
      id
    }
  }
`;