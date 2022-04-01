import { gql } from "@apollo/client";

// export const sample = gql`
// `;

export const CREATE_BLOG = gql`
  mutation createBlog(
    $blogcategorytag: [String!]!
    $blogtag: [String!]!
    $contents: String!
    $title: String!
  ) {
    createBlog(
      blogcategorytag: $blogcategorytag
      blogtag: $blogtag
      contents: $contents
      title: $title
    ) {
      id
    }
  }
`;
