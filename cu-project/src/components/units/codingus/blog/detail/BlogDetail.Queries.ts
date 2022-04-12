import { gql } from "@apollo/client";

export const FETCH_BLOG = gql`
  query fetchBlog($blogId: String!) {
    fetchBlog(blogId: $blogId) {
      id
      title
      contents
      user {
        nickname
      }
      like
      dislike
      blogtag {
        tag
      }
      blogcategorytag {
        tag
      }
    }
  }
`;

export const DELETE_BLOG = gql`
  mutation deleteBlog($blogid: String!) {
    deleteBlog(blogid: $blogid)
  }
`;

export const FETCH_BLOG_ALL = gql`
  query fetchBlogAll {
    fetchBlogAll {
      id
      title
      contents
      like
      dislike
    }
  }
`;

export const FETCH_BLOG_ONE = gql`
  query fetchblogone($blogid: String!){
    fetchblogone(blogid: $blogid){
      id
      title
      contents
      user {
        nickname
      }
      like
      dislike
      blogtag {
        tag
      }
      blogcategorytag {
        tag
      }
      createAt
    }
  }
`;
