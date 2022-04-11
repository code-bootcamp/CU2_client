import { gql } from "@apollo/client";

export const FETCH_BLOG_COMMENT_ORDERBY_CREATE = gql`
    query fetchBlogCommentorderbycreate($blogid: String!){
        fetchBlogCommentorderbycreate(blogid: $blogid){
            id
            contents
            user{
                id
                nickname
            }
            like
            dislike
        }
    }
`;

export const CREATE_BLOG_COMMENT = gql`
    mutation createBlogComment($blogid: String!, $contents: String!){
        createBlogComment(blogid: $blogid, contents: $contents){
            id
        }
    }
`;

export const DELETE_BLOG_COMMENT = gql`
    mutation deleteBlogComment($blogcommentid: String!){
        deleteBlogComment(blogcommentid: $blogcommentid)
    }
`