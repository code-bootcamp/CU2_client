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
      url
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

export const FETCH_MY_FOLLOWING = gql`
  query fetchmyFollowing {
    fetchmyFollowing {
      id
    }
  }
`;

export const CREATE_FOLLOW = gql`
  mutation createFollow($followUserId: String!) {
    createFollow(followUserId: $followUserId) {
      id
    }
  }
`;
