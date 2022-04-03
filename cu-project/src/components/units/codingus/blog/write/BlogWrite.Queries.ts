import { gql } from "@apollo/client";

// export const sample = gql`
// `;

export const CREATE_BLOG = gql`
  mutation createBlog(
    $blogcategorytag: [String!]!
    $blogtag: [String!]!
    $contents: String!
    $title: String!
    $url: String!
  ) {
    createBlog(
      blogcategorytag: $blogcategorytag
      blogtag: $blogtag
      contents: $contents
      title: $title
      url: $url
    ) {
      id
    }
  }
`;
export const UPDATE_BLOG = gql`
  mutation updateBlog(
    $blogid: String!
    $contents: String!
    $title: String!
    $url: String!
  ) {
    updateBlog(
      blogid: $blogid
      contents: $contents
      title: $title
      url: $url
    ) {
      id
    }
  }
`;
